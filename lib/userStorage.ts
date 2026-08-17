export interface User {
  id: string;
  name: string;
  username: string;
  password: string;
  role: "superadmin" | "hr" | "blog";
  accessLevel?: "edit" | "view";
  createdAt: string;
  lastLogin?: string;
}

const USERS_STORAGE_KEY = "pmg_users";
const AUDIT_LOGS_KEY = "pmg_audit_logs";

export interface AuditLog {
  id: string;
  userId: string;
  username: string;
  role: string;
  action: "login" | "logout" | "create_user" | "update_user" | "delete_user";
  timestamp: string;
  ipAddress?: string;
  userAgent?: string;
  details?: string;
}

// Initialize with default admin user if no users exist
export const initializeUsers = () => {
  const existingUsers = getUsers();
  if (existingUsers.length === 0) {
    const defaultAdmin: User = {
      id: "1",
      name: "Super Admin",
      username: "admin",
      password: "admin123",
      role: "superadmin",
      accessLevel: "edit",
      createdAt: new Date().toISOString(),
    };
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify([defaultAdmin]));
  }
};

export const getUsers = (): User[] => {
  if (typeof window === "undefined") return [];
  const users = localStorage.getItem(USERS_STORAGE_KEY);
  return users ? JSON.parse(users) : [];
};

export const getUserById = (id: string): User | undefined => {
  const users = getUsers();
  return users.find((user) => user.id === id);
};

export const getUserByUsername = (username: string): User | undefined => {
  const users = getUsers();
  return users.find((user) => user.username === username);
};

export const createUser = (userData: Omit<User, "id" | "createdAt">): User => {
  const users = getUsers();
  const newUser: User = {
    ...userData,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  };
  users.push(newUser);
  localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
  
  // Log the action
  addAuditLog({
    userId: newUser.id,
    username: newUser.username,
    role: newUser.role,
    action: "create_user",
    timestamp: new Date().toISOString(),
    details: `Created user: ${newUser.name} (${newUser.username}) with role ${newUser.role}`,
  });
  
  return newUser;
};

export const updateUser = (id: string, userData: Partial<User>): User | null => {
  const users = getUsers();
  const index = users.findIndex((user) => user.id === id);
  if (index === -1) return null;
  
  const updatedUser = { ...users[index], ...userData };
  users[index] = updatedUser;
  localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
  
  // Log the action
  addAuditLog({
    userId: updatedUser.id,
    username: updatedUser.username,
    role: updatedUser.role,
    action: "update_user",
    timestamp: new Date().toISOString(),
    details: `Updated user: ${updatedUser.name} (${updatedUser.username})`,
  });
  
  return updatedUser;
};

export const deleteUser = (id: string): boolean => {
  const users = getUsers();
  const userToDelete = users.find((user) => user.id === id);
  if (!userToDelete) return false;
  
  const filteredUsers = users.filter((user) => user.id !== id);
  localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(filteredUsers));
  
  // Log the action
  addAuditLog({
    userId: userToDelete.id,
    username: userToDelete.username,
    role: userToDelete.role,
    action: "delete_user",
    timestamp: new Date().toISOString(),
    details: `Deleted user: ${userToDelete.name} (${userToDelete.username})`,
  });
  
  return true;
};

export const updateUserLastLogin = (userId: string) => {
  const users = getUsers();
  const index = users.findIndex((user) => user.id === userId);
  if (index !== -1) {
    users[index].lastLogin = new Date().toISOString();
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
  }
};

// Audit Log Functions
export const getAuditLogs = (): AuditLog[] => {
  if (typeof window === "undefined") return [];
  const logs = localStorage.getItem(AUDIT_LOGS_KEY);
  return logs ? JSON.parse(logs) : [];
};

export const addAuditLog = (log: Omit<AuditLog, "id">): AuditLog => {
  const logs = getAuditLogs();
  const newLog: AuditLog = {
    ...log,
    id: Date.now().toString(),
  };
  logs.unshift(newLog); // Add to beginning
  localStorage.setItem(AUDIT_LOGS_KEY, JSON.stringify(logs));
  return newLog;
};

export const clearAuditLogs = () => {
  localStorage.setItem(AUDIT_LOGS_KEY, JSON.stringify([]));
};

export const getAuditLogsByUser = (userId: string): AuditLog[] => {
  const logs = getAuditLogs();
  return logs.filter((log) => log.userId === userId);
};

export const getAuditLogsByAction = (action: AuditLog["action"]): AuditLog[] => {
  const logs = getAuditLogs();
  return logs.filter((log) => log.action === action);
};
