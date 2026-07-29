"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useBlogAuth } from "@/lib/blogAuth";
import { LogOut, ArrowLeft, Users, Building, Briefcase, Calendar, DollarSign, Star, Plus, Edit, Trash2, Search, Filter, FileText, Clock, Calculator, CheckCircle, Download, ClipboardList, Receipt, Globe, MessageSquare } from "lucide-react";

interface Employee {
  id: string;
  empId: string;
  name: string;
  designation: string;
  department: string;
  reportingManager: string;
  personalEmail: string;
  contactNumber: string;
  emergencyNumber: string;
  aadharNumber: string;
  panNumber: string;
  uanNumber: string;
  bloodGroup: string;
  education: string;
  gender: "male" | "female" | "other";
  dob: string;
  doj: string;
  dol: string;
  employmentType: "full-time" | "part-time";
  status: "active" | "inactive" | "on-leave";
}

interface Department {
  id: string;
  name: string;
  head: string;
  employeeCount: number;
}

interface JobPosting {
  id: string;
  title: string;
  department: string;
  type: "full-time" | "part-time" | "contract";
  status: "open" | "closed" | "draft";
  applicants: number;
  postedDate: string;
}

interface LeaveRequest {
  id: string;
  employee: string;
  type: "sick" | "vacation" | "personal";
  startDate: string;
  endDate: string;
  status: "pending" | "approved" | "rejected";
  days: number;
}

export default function HRDashboard() {
  const { isAuthenticated, isLoading, logout } = useBlogAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"employees" | "departments" | "jobs" | "leave" | "payroll" | "performance" | "onboarding" | "attendance" | "earnings" | "deductions" | "approvals" | "disbursement" | "reporting" | "website">("employees");
  
  // Sample data
  const [employees, setEmployees] = useState<Employee[]>([
    { 
      id: "1", 
      empId: "EMP001",
      name: "John Doe", 
      designation: "Senior Developer",
      department: "Engineering", 
      reportingManager: "Sarah Wilson",
      personalEmail: "john.doe@gmail.com",
      contactNumber: "9876543210",
      emergencyNumber: "9876543211",
      aadharNumber: "1234-5678-9012",
      panNumber: "ABCDE1234F",
      uanNumber: "123456789012",
      bloodGroup: "O+",
      education: "B.Tech Computer Science",
      gender: "male",
      dob: "1990-05-15",
      doj: "2023-01-15",
      dol: "",
      employmentType: "full-time",
      status: "active" 
    },
    { 
      id: "2", 
      empId: "EMP002",
      name: "Jane Smith", 
      designation: "Marketing Manager",
      department: "Marketing", 
      reportingManager: "Sarah Wilson",
      personalEmail: "jane.smith@gmail.com",
      contactNumber: "9876543212",
      emergencyNumber: "9876543213",
      aadharNumber: "2345-6789-0123",
      panNumber: "BCDEF2345G",
      uanNumber: "234567890123",
      bloodGroup: "A+",
      education: "MBA Marketing",
      gender: "female",
      dob: "1988-08-20",
      doj: "2022-06-20",
      dol: "",
      employmentType: "full-time",
      status: "active" 
    },
  ]);

  const [departments, setDepartments] = useState<Department[]>([
    { id: "1", name: "Engineering", head: "John Doe", employeeCount: 15 },
    { id: "2", name: "Marketing", head: "Jane Smith", employeeCount: 8 },
    { id: "3", name: "HR", head: "Sarah Wilson", employeeCount: 5 },
  ]);

  const [jobPostings, setJobPostings] = useState<JobPosting[]>([
    { id: "1", title: "Senior Frontend Developer", department: "Engineering", type: "full-time", status: "open", applicants: 12, postedDate: "2024-01-15" },
    { id: "2", title: "Marketing Specialist", department: "Marketing", type: "full-time", status: "open", applicants: 8, postedDate: "2024-01-20" },
    { id: "3", title: "UX Designer", department: "Engineering", type: "contract", status: "draft", applicants: 0, postedDate: "2024-01-25" },
  ]);

  const [leaveRequests, setLeaveRequests] = useState<LeaveRequest[]>([
    { id: "1", employee: "Mike Johnson", type: "sick", startDate: "2024-01-20", endDate: "2024-01-22", status: "pending", days: 3 },
    { id: "2", employee: "Jane Smith", type: "vacation", startDate: "2024-02-01", endDate: "2024-02-05", status: "approved", days: 5 },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [showEmployeeForm, setShowEmployeeForm] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);
  const [employeeFormData, setEmployeeFormData] = useState({
    empId: "",
    name: "",
    designation: "",
    department: "",
    reportingManager: "",
    personalEmail: "",
    contactNumber: "",
    emergencyNumber: "",
    aadharNumber: "",
    panNumber: "",
    uanNumber: "",
    bloodGroup: "",
    education: "",
    gender: "male" as "male" | "female" | "other",
    dob: "",
    doj: "",
    dol: "",
    employmentType: "full-time" as "full-time" | "part-time",
    status: "active" as "active" | "inactive" | "on-leave",
  });

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/blog/adminlogin");
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  const filteredEmployees = employees.filter(emp => 
    emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.personalEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.empId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddEmployee = () => {
    setEditingEmployee(null);
    setEmployeeFormData({
      empId: "",
      name: "",
      designation: "",
      department: "",
      reportingManager: "",
      personalEmail: "",
      contactNumber: "",
      emergencyNumber: "",
      aadharNumber: "",
      panNumber: "",
      uanNumber: "",
      bloodGroup: "",
      education: "",
      gender: "male",
      dob: "",
      doj: "",
      dol: "",
      employmentType: "full-time",
      status: "active",
    });
    setShowEmployeeForm(true);
  };

  const handleEditEmployee = (employee: Employee) => {
    setEditingEmployee(employee);
    setEmployeeFormData({
      empId: employee.empId,
      name: employee.name,
      designation: employee.designation,
      department: employee.department,
      reportingManager: employee.reportingManager,
      personalEmail: employee.personalEmail,
      contactNumber: employee.contactNumber,
      emergencyNumber: employee.emergencyNumber,
      aadharNumber: employee.aadharNumber,
      panNumber: employee.panNumber,
      uanNumber: employee.uanNumber,
      bloodGroup: employee.bloodGroup,
      education: employee.education,
      gender: employee.gender,
      dob: employee.dob,
      doj: employee.doj,
      dol: employee.dol,
      employmentType: employee.employmentType,
      status: employee.status,
    });
    setShowEmployeeForm(true);
  };

  const handleEmployeeFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingEmployee) {
      setEmployees(employees.map(emp => 
        emp.id === editingEmployee.id 
          ? { ...employeeFormData, id: editingEmployee.id }
          : emp
      ));
    } else {
      const newEmployee: Employee = {
        ...employeeFormData,
        id: Date.now().toString(),
      };
      setEmployees([...employees, newEmployee]);
    }
    
    setShowEmployeeForm(false);
    setEditingEmployee(null);
  };

  const handleEmployeeFormCancel = () => {
    setShowEmployeeForm(false);
    setEditingEmployee(null);
  };

  const handleDeleteEmployee = (id: string) => {
    if (confirm("Are you sure you want to delete this employee?")) {
      setEmployees(employees.filter(emp => emp.id !== id));
    }
  };

  const tabs = [
    { id: "employees", label: "Employees", icon: Users },
    { id: "website", label: "Website Data", icon: Globe },
    { id: "onboarding", label: "Onboarding", icon: FileText },
    { id: "attendance", label: "Attendance", icon: Clock },
    { id: "earnings", label: "Earnings", icon: Calculator },
    { id: "deductions", label: "Deductions", icon: Receipt },
    { id: "approvals", label: "Approvals", icon: CheckCircle },
    { id: "disbursement", label: "Disbursement", icon: Download },
    { id: "reporting", label: "Reporting", icon: ClipboardList },

    { id: "departments", label: "Departments", icon: Building },
    { id: "jobs", label: "Jobs", icon: Briefcase },
    { id: "leave", label: "Leave", icon: Calendar },
    { id: "payroll", label: "Payroll", icon: DollarSign },
    { id: "performance", label: "Performance", icon: Star },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.push("/admin/dashboard")}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Dashboard
            </button>
            <h1 className="text-2xl font-bold text-gray-900">HR Dashboard</h1>
          </div>
          <button
            onClick={logout}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </header>

      <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Employees</p>
                <p className="text-2xl font-bold text-gray-900">{employees.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <Building className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Departments</p>
                <p className="text-2xl font-bold text-gray-900">{departments.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Briefcase className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Open Positions</p>
                <p className="text-2xl font-bold text-gray-900">{jobPostings.filter(j => j.status === "open").length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-orange-100 rounded-lg">
                <Calendar className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Pending Requests</p>
                <p className="text-2xl font-bold text-gray-900">{leaveRequests.filter(l => l.status === "pending").length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Layout */}
        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow p-4">
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`${
                        activeTab === tab.id
                          ? "bg-blue-50 text-blue-600 border-blue-200"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 border-transparent"
                      } w-full flex items-center gap-3 px-4 py-3 rounded-lg border-2 font-medium text-sm transition-colors`}
                    >
                      <Icon className="w-5 h-5" />
                      {tab.label}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-white rounded-lg shadow p-6">
          {activeTab === "employees" && (
            <div>
              {showEmployeeForm ? (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">
                      {editingEmployee ? "Edit Employee" : "Add New Employee"}
                    </h2>
                    <button
                      onClick={handleEmployeeFormCancel}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Cancel
                    </button>
                  </div>
                  <form onSubmit={handleEmployeeFormSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Emp ID</label>
                        <input
                          type="text"
                          value={employeeFormData.empId}
                          onChange={(e) => setEmployeeFormData({ ...employeeFormData, empId: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                          type="text"
                          value={employeeFormData.name}
                          onChange={(e) => setEmployeeFormData({ ...employeeFormData, name: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Designation</label>
                        <input
                          type="text"
                          value={employeeFormData.designation}
                          onChange={(e) => setEmployeeFormData({ ...employeeFormData, designation: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                        <input
                          type="text"
                          value={employeeFormData.department}
                          onChange={(e) => setEmployeeFormData({ ...employeeFormData, department: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Reporting Manager</label>
                        <input
                          type="text"
                          value={employeeFormData.reportingManager}
                          onChange={(e) => setEmployeeFormData({ ...employeeFormData, reportingManager: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Personal Email</label>
                        <input
                          type="email"
                          value={employeeFormData.personalEmail}
                          onChange={(e) => setEmployeeFormData({ ...employeeFormData, personalEmail: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                        <input
                          type="tel"
                          value={employeeFormData.contactNumber}
                          onChange={(e) => setEmployeeFormData({ ...employeeFormData, contactNumber: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Emergency Number</label>
                        <input
                          type="tel"
                          value={employeeFormData.emergencyNumber}
                          onChange={(e) => setEmployeeFormData({ ...employeeFormData, emergencyNumber: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Aadhar Number</label>
                        <input
                          type="text"
                          value={employeeFormData.aadharNumber}
                          onChange={(e) => setEmployeeFormData({ ...employeeFormData, aadharNumber: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">PAN Number</label>
                        <input
                          type="text"
                          value={employeeFormData.panNumber}
                          onChange={(e) => setEmployeeFormData({ ...employeeFormData, panNumber: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">UAN Number</label>
                        <input
                          type="text"
                          value={employeeFormData.uanNumber}
                          onChange={(e) => setEmployeeFormData({ ...employeeFormData, uanNumber: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Blood Group</label>
                        <select
                          value={employeeFormData.bloodGroup}
                          onChange={(e) => setEmployeeFormData({ ...employeeFormData, bloodGroup: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        >
                          <option value="">Select</option>
                          <option value="A+">A+</option>
                          <option value="A-">A-</option>
                          <option value="B+">B+</option>
                          <option value="B-">B-</option>
                          <option value="AB+">AB+</option>
                          <option value="AB-">AB-</option>
                          <option value="O+">O+</option>
                          <option value="O-">O-</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Education</label>
                        <input
                          type="text"
                          value={employeeFormData.education}
                          onChange={(e) => setEmployeeFormData({ ...employeeFormData, education: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                        <select
                          value={employeeFormData.gender}
                          onChange={(e) => setEmployeeFormData({ ...employeeFormData, gender: e.target.value as any })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        >
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">DOB</label>
                        <input
                          type="date"
                          value={employeeFormData.dob}
                          onChange={(e) => setEmployeeFormData({ ...employeeFormData, dob: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">DOJ (Date of Joining)</label>
                        <input
                          type="date"
                          value={employeeFormData.doj}
                          onChange={(e) => setEmployeeFormData({ ...employeeFormData, doj: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">DOL (Date of Leaving)</label>
                        <input
                          type="date"
                          value={employeeFormData.dol}
                          onChange={(e) => setEmployeeFormData({ ...employeeFormData, dol: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Employment Type</label>
                        <select
                          value={employeeFormData.employmentType}
                          onChange={(e) => setEmployeeFormData({ ...employeeFormData, employmentType: e.target.value as any })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        >
                          <option value="full-time">Full Time</option>
                          <option value="part-time">Part Time</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                        <select
                          value={employeeFormData.status}
                          onChange={(e) => setEmployeeFormData({ ...employeeFormData, status: e.target.value as any })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        >
                          <option value="active">Active</option>
                          <option value="inactive">Inactive</option>
                          <option value="on-leave">On Leave</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button
                        type="submit"
                        className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors font-medium"
                      >
                        {editingEmployee ? "Update Employee" : "Add Employee"}
                      </button>
                      <button
                        type="button"
                        onClick={handleEmployeeFormCancel}
                        className="bg-gray-200 text-gray-800 py-2 px-6 rounded-md hover:bg-gray-300 transition-colors font-medium"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">Employee Management</h2>
                    <div className="flex gap-3">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="text"
                          placeholder="Search employees..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <button onClick={handleAddEmployee} className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                        <Plus className="w-4 h-4" />
                        Add Employee
                      </button>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Emp ID</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Designation</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reporting Manager</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Personal Email</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact Number</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Emergency Number</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aadhar Number</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PAN Number</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">UAN Number</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Blood Group</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Education</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DOB</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DOJ</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date of Leaving</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employment Type</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                          <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {filteredEmployees.map((employee) => (
                          <tr key={employee.id} className="hover:bg-gray-50">
                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{employee.empId}</td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{employee.name}</td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{employee.designation}</td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{employee.department}</td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{employee.reportingManager}</td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{employee.personalEmail}</td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{employee.contactNumber}</td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{employee.emergencyNumber}</td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{employee.aadharNumber}</td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{employee.panNumber}</td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{employee.uanNumber}</td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{employee.bloodGroup}</td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{employee.education}</td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{employee.gender}</td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{employee.dob}</td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{employee.doj}</td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{employee.dol || "-"}</td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{employee.employmentType}</td>
                            <td className="px-4 py-3 whitespace-nowrap">
                              <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${
                                employee.status === "active" ? "bg-green-100 text-green-800" :
                                employee.status === "on-leave" ? "bg-yellow-100 text-yellow-800" :
                                "bg-red-100 text-red-800"
                              }`}>
                                {employee.status}
                              </span>
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium">
                              <div className="flex justify-end gap-2">
                                <button onClick={() => handleEditEmployee(employee)} className="text-blue-600 hover:text-blue-900"><Edit className="w-4 h-4" /></button>
                                <button onClick={() => handleDeleteEmployee(employee.id)} className="text-red-600 hover:text-red-900"><Trash2 className="w-4 h-4" /></button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </div>
          )}

          {activeTab === "departments" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Department Organization</h2>
                <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  <Plus className="w-4 h-4" />
                  Add Department
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {departments.map((dept) => (
                  <div key={dept.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <Building className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex gap-2">
                        <button className="text-blue-600 hover:text-blue-900"><Edit className="w-4 h-4" /></button>
                        <button className="text-red-600 hover:text-red-900"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{dept.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">Head: {dept.head}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Users className="w-4 h-4" />
                      {dept.employeeCount} employees
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "jobs" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Job Posting & Recruitment</h2>
                <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  <Plus className="w-4 h-4" />
                  Post New Job
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applicants</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Posted Date</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {jobPostings.map((job) => (
                      <tr key={job.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{job.title}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{job.department}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 capitalize">{job.type}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${
                            job.status === "open" ? "bg-green-100 text-green-800" :
                            job.status === "closed" ? "bg-red-100 text-red-800" :
                            "bg-gray-100 text-gray-800"
                          }`}>
                            {job.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{job.applicants}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.postedDate}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end gap-2">
                            <button className="text-blue-600 hover:text-blue-900"><Edit className="w-4 h-4" /></button>
                            <button className="text-red-600 hover:text-red-900"><Trash2 className="w-4 h-4" /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "leave" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Leave & Attendance Management</h2>
                <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  <Plus className="w-4 h-4" />
                  Request Leave
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Days</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {leaveRequests.map((request) => (
                      <tr key={request.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{request.employee}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 capitalize">{request.type}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.startDate}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.endDate}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{request.days}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${
                            request.status === "approved" ? "bg-green-100 text-green-800" :
                            request.status === "rejected" ? "bg-red-100 text-red-800" :
                            "bg-yellow-100 text-yellow-800"
                          }`}>
                            {request.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          {request.status === "pending" && (
                            <div className="flex justify-end gap-2">
                              <button className="text-green-600 hover:text-green-900 text-xs px-2 py-1 bg-green-50 rounded">Approve</button>
                              <button className="text-red-600 hover:text-red-900 text-xs px-2 py-1 bg-red-50 rounded">Reject</button>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "payroll" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Payroll Management</h2>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                    <Plus className="w-4 h-4" />
                    Run Payroll
                  </button>
                  <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                    <Download className="w-4 h-4" />
                    Export Report
                  </button>
                </div>
              </div>

              {/* Payroll Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white">
                  <p className="text-sm font-medium opacity-90">Total Payroll Cost</p>
                  <p className="text-3xl font-bold mt-2">₹19,55,000</p>
                  <p className="text-xs mt-2 opacity-75">January 2024</p>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 text-white">
                  <p className="text-sm font-medium opacity-90">Net Salary Disbursed</p>
                  <p className="text-3xl font-bold mt-2">₹16,12,500</p>
                  <p className="text-xs mt-2 opacity-75">After deductions</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-6 text-white">
                  <p className="text-sm font-medium opacity-90">Total Deductions</p>
                  <p className="text-3xl font-bold mt-2">₹3,42,500</p>
                  <p className="text-xs mt-2 opacity-75">EPF, ESIC, Tax</p>
                </div>
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-6 text-white">
                  <p className="text-sm font-medium opacity-90">Employees Paid</p>
                  <p className="text-3xl font-bold mt-2">23/23</p>
                  <p className="text-xs mt-2 opacity-75">100% processed</p>
                </div>
              </div>

              {/* Payroll Period Selector */}
              <div className="bg-white rounded-lg shadow p-4 mb-6">
                <div className="flex items-center gap-4">
                  <label className="text-sm font-medium text-gray-700">Pay Period:</label>
                  <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>January 2024</option>
                    <option>December 2023</option>
                    <option>November 2023</option>
                  </select>
                  <div className="flex-1"></div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="font-medium">Status:</span>
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-100 text-green-800">Processed</span>
                  </div>
                </div>
              </div>

              {/* Detailed Payroll Table */}
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Payroll Details</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Emp ID</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Basic</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">HRA</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Allowances</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gross</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">EPF</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ESIC</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TDS</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Net Salary</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {employees.map((emp) => (
                        <tr key={emp.id} className="hover:bg-gray-50">
                          <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{emp.empId}</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{emp.name}</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{emp.department}</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">₹50,000</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">₹15,000</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">₹10,000</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm font-bold text-gray-900">₹75,000</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-red-600">₹6,000</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-red-600">₹225</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-red-600">₹8,500</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm font-bold text-green-600">₹60,275</td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-100 text-green-800">Paid</span>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium">
                            <div className="flex justify-end gap-2">
                              <button className="text-blue-600 hover:text-blue-900" title="View Payslip">
                                <Download className="w-4 h-4" />
                              </button>
                              <button className="text-gray-600 hover:text-gray-900" title="Edit">
                                <Edit className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Payroll Summary Breakdown */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Earnings Breakdown</h3>
                  <div className="space-y-3">
                    {[
                      { name: "Basic Salary", amount: "₹11,50,000", percentage: 59 },
                      { name: "House Rent Allowance", amount: "₹3,45,000", percentage: 18 },
                      { name: "Special Allowance", amount: "₹2,30,000", percentage: 12 },
                      { name: "Transport & Medical", amount: "₹1,15,000", percentage: 6 },
                      { name: "Performance Bonus", amount: "₹1,15,000", percentage: 5 }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-700">{item.name}</span>
                            <span className="font-medium text-gray-900">{item.amount}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${item.percentage}%` }}></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Deductions Breakdown</h3>
                  <div className="space-y-3">
                    {[
                      { name: "Provident Fund (EPF)", amount: "₹1,38,000", percentage: 40 },
                      { name: "Income Tax (TDS)", amount: "₹1,95,500", percentage: 57 },
                      { name: "ESIC", amount: "₹5,175", percentage: 2 },
                      { name: "Professional Tax", amount: "₹4,600", percentage: 1 }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-700">{item.name}</span>
                            <span className="font-medium text-gray-900">{item.amount}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-red-500 h-2 rounded-full" style={{ width: `${item.percentage}%` }}></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "onboarding" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Employee Data Collection & Onboarding</h2>
                <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  <Plus className="w-4 h-4" />
                  New Onboarding
                </button>
              </div>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Onboarding Checklist</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Document Collection (Aadhar, PAN, Bank Details)",
                      "Background Verification",
                      "IT Setup & Email Creation",
                      "Office ID Card Issuance",
                      "Security Access Setup",
                      "HR Policy Documentation",
                      "Benefits Enrollment",
                      "Training Schedule Setup"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 bg-white p-3 rounded-lg border">
                        <input type="checkbox" className="w-4 h-4 text-blue-600" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {employees.slice(0, 2).map((emp) => (
                        <tr key={emp.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{emp.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{emp.doj}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                            </div>
                            <span className="text-xs text-gray-500">75%</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800">In Progress</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-blue-600 hover:text-blue-900">View Details</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === "attendance" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Attendance & Leave Tracking</h2>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                    <Plus className="w-4 h-4" />
                    Mark Attendance
                  </button>
                  <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                    <Plus className="w-4 h-4" />
                    Apply Leave
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm text-green-600 font-medium">Present Today</p>
                  <p className="text-2xl font-bold text-green-900">18</p>
                </div>
                <div className="bg-red-50 rounded-lg p-4">
                  <p className="text-sm text-red-600 font-medium">Absent Today</p>
                  <p className="text-2xl font-bold text-red-900">2</p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4">
                  <p className="text-sm text-yellow-600 font-medium">On Leave</p>
                  <p className="text-2xl font-bold text-yellow-900">3</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-blue-600 font-medium">Late Arrivals</p>
                  <p className="text-2xl font-bold text-blue-900">1</p>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Check In</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Check Out</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hours</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {employees.slice(0, 3).map((emp) => (
                      <tr key={emp.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{emp.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-01-24</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">09:00 AM</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">06:00 PM</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">9h 0m</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-100 text-green-800">Present</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "earnings" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Earnings & Allowances Calculation</h2>
                <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  <Plus className="w-4 h-4" />
                  Add Earning Component
                </button>
              </div>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Earning Components</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { name: "Basic Salary", amount: "₹50,000", type: "Fixed" },
                      { name: "HRA", amount: "₹15,000", type: "Fixed" },
                      { name: "Transport Allowance", amount: "₹3,000", type: "Fixed" },
                      { name: "Medical Allowance", amount: "₹2,000", type: "Fixed" },
                      { name: "Special Allowance", amount: "₹5,000", type: "Variable" },
                      { name: "Performance Bonus", amount: "₹10,000", type: "Variable" }
                    ].map((item, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg border">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-gray-900">{item.name}</h4>
                          <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-800">{item.type}</span>
                        </div>
                        <p className="text-lg font-bold text-gray-900">{item.amount}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Basic</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">HRA</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Allowances</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bonus</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Earnings</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {employees.slice(0, 3).map((emp) => (
                        <tr key={emp.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{emp.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹50,000</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹15,000</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹10,000</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹10,000</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-green-600">₹85,000</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === "deductions" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Deductions (Taxes, EPF/ESIC)</h2>
                <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  <Plus className="w-4 h-4" />
                  Add Deduction
                </button>
              </div>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Deduction Components</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { name: "Provident Fund (EPF)", amount: "₹6,000", rate: "12%" },
                      { name: "ESIC", amount: "₹225", rate: "0.75%" },
                      { name: "Professional Tax", amount: "₹200", rate: "Fixed" },
                      { name: "Income Tax (TDS)", amount: "₹8,500", rate: "Slab" },
                      { name: "Health Insurance", amount: "₹1,500", rate: "Fixed" },
                      { name: "Loan Recovery", amount: "₹2,000", rate: "Variable" }
                    ].map((item, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg border">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-gray-900">{item.name}</h4>
                          <span className="text-xs px-2 py-1 rounded bg-red-100 text-red-800">{item.rate}</span>
                        </div>
                        <p className="text-lg font-bold text-gray-900">{item.amount}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">EPF</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ESIC</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Professional Tax</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TDS</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Deductions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {employees.slice(0, 3).map((emp) => (
                        <tr key={emp.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{emp.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹6,000</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹225</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹200</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹8,500</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-red-600">₹14,925</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === "approvals" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Payroll Approvals & Registration</h2>
                <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  <Plus className="w-4 h-4" />
                  Register Payroll
                </button>
              </div>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <p className="text-sm text-yellow-600 font-medium">Pending Approvals</p>
                    <p className="text-2xl font-bold text-yellow-900">5</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-sm text-green-600 font-medium">Approved This Month</p>
                    <p className="text-2xl font-bold text-green-900">23</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-sm text-blue-600 font-medium">Total Registered</p>
                    <p className="text-2xl font-bold text-blue-900">45</p>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payroll ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Period</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employees</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Amount</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {[
                        { id: "PAY-001", period: "Jan 2024", employees: 23, amount: "₹19,55,000", status: "pending" },
                        { id: "PAY-002", period: "Dec 2023", employees: 22, amount: "₹18,75,000", status: "approved" },
                        { id: "PAY-003", period: "Nov 2023", employees: 22, amount: "₹18,75,000", status: "approved" }
                      ].map((payroll) => (
                        <tr key={payroll.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{payroll.id}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payroll.period}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{payroll.employees}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{payroll.amount}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${
                              payroll.status === "approved" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                            }`}>
                              {payroll.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            {payroll.status === "pending" && (
                              <div className="flex justify-end gap-2">
                                <button className="text-green-600 hover:text-green-900 text-xs px-2 py-1 bg-green-50 rounded">Approve</button>
                                <button className="text-red-600 hover:text-red-900 text-xs px-2 py-1 bg-red-50 rounded">Reject</button>
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === "disbursement" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Salary Disbursement & Payslips</h2>
                <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  <Download className="w-4 h-4" />
                  Process Disbursement
                </button>
              </div>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-sm text-green-600 font-medium">Disbursed This Month</p>
                    <p className="text-2xl font-bold text-green-900">₹19,55,000</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-sm text-blue-600 font-medium">Pending Disbursement</p>
                    <p className="text-2xl font-bold text-blue-900">₹85,000</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <p className="text-sm text-purple-600 font-medium">Payslips Generated</p>
                    <p className="text-2xl font-bold text-purple-900">23</p>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bank Account</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Net Salary</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Disbursement Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Payslip</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {employees.slice(0, 3).map((emp) => (
                        <tr key={emp.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{emp.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">HDFC****1234</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">₹70,075</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-01-25</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-100 text-green-800">Disbursed</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-blue-600 hover:text-blue-900 flex items-center gap-1">
                              <Download className="w-4 h-4" />
                              Download
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === "reporting" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Reporting, Filing & Year-End Processes</h2>
                <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  <Plus className="w-4 h-4" />
                  Generate Report
                </button>
              </div>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { name: "Monthly Payroll Report", status: "Ready", icon: FileText },
                    { name: "Tax Deduction Report (Form 16)", status: "Pending", icon: Receipt },
                    { name: "EPF/ESIC Filing", status: "Completed", icon: CheckCircle },
                    { name: "Year-End Summary", status: "Pending", icon: ClipboardList }
                  ].map((report, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 border hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <report.icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <h3 className="font-medium text-gray-900">{report.name}</h3>
                      </div>
                      <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${
                        report.status === "Ready" || report.status === "Completed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                      }`}>
                        {report.status}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Year-End Checklist</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Generate Form 16 for all employees",
                      "File EPF annual returns",
                      "File ESIC annual returns",
                      "Prepare TDS returns",
                      "Generate annual salary reports",
                      "Update employee records",
                      "Process bonus calculations",
                      "Prepare tax planning documents"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 bg-white p-3 rounded-lg border">
                        <input type="checkbox" className="w-4 h-4 text-blue-600" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Report Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Period</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Generated On</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {[
                        { name: "Monthly Payroll Summary", type: "Payroll", period: "Jan 2024", date: "2024-01-25", status: "completed" },
                        { name: "TDS Deduction Report", type: "Tax", period: "Q4 2023", date: "2024-01-20", status: "completed" },
                        { name: "EPF Contribution Report", type: "Compliance", period: "Dec 2023", date: "2024-01-15", status: "completed" },
                        { name: "Form 16 Generation", type: "Tax", period: "FY 2023-24", date: "-", status: "pending" }
                      ].map((report, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{report.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{report.type}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{report.period}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{report.date}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${
                              report.status === "completed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                            }`}>
                              {report.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-blue-600 hover:text-blue-900 flex items-center gap-1">
                              <Download className="w-4 h-4" />
                              Download
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === "website" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Website Submissions & Leads</h2>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                    <Download className="w-4 h-4" />
                    Export Data
                  </button>
                  <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                    <Plus className="w-4 h-4" />
                    Add Entry
                  </button>
                </div>
              </div>

              {/* Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <MessageSquare className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Contact Forms</p>
                      <p className="text-2xl font-bold text-gray-900">156</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <Globe className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Demo Requests</p>
                      <p className="text-2xl font-bold text-gray-900">43</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <Briefcase className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Job Applications</p>
                      <p className="text-2xl font-bold text-gray-900">89</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-orange-100 rounded-lg">
                      <Users className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Newsletter</p>
                      <p className="text-2xl font-bold text-gray-900">312</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Filter Tabs */}
              <div className="bg-white rounded-lg shadow p-4 mb-6">
                <div className="flex gap-2">
                  {["All", "Contact Forms", "Demo Requests", "Job Applications", "Newsletter"].map((filter) => (
                    <button
                      key={filter}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        filter === "All"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submissions Table */}
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Recent Submissions</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {[
                        { id: "SUB-001", type: "Demo Request", name: "Rahul Sharma", email: "rahul@techcorp.com", phone: "+91 98765 43210", company: "TechCorp India", message: "Interested in B2B lead generation services", date: "2024-01-24", status: "new" },
                        { id: "SUB-002", type: "Contact Form", name: "Priya Patel", email: "priya@startup.io", phone: "+91 87654 32109", company: "Startup.io", message: "Need information about pricing", date: "2024-01-24", status: "contacted" },
                        { id: "SUB-003", type: "Job Application", name: "Amit Kumar", email: "amit@gmail.com", phone: "+91 76543 21098", company: "-", message: "Applying for Marketing Manager position", date: "2024-01-23", status: "reviewing" },
                        { id: "SUB-004", type: "Demo Request", name: "Sneha Reddy", email: "sneha@enterprise.com", phone: "+91 65432 10987", company: "Enterprise Solutions", message: "Request for product demo", date: "2024-01-23", status: "scheduled" },
                        { id: "SUB-005", type: "Contact Form", name: "Vikram Singh", email: "vikram@business.co", phone: "+91 54321 09876", company: "Business Co", message: "Partnership inquiry", date: "2024-01-22", status: "closed" }
                      ].map((submission) => (
                        <tr key={submission.id} className="hover:bg-gray-50">
                          <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{submission.id}</td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${
                              submission.type === "Demo Request" ? "bg-green-100 text-green-800" :
                              submission.type === "Job Application" ? "bg-purple-100 text-purple-800" :
                              "bg-blue-100 text-blue-800"
                            }`}>
                              {submission.type}
                            </span>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{submission.name}</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{submission.email}</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{submission.phone}</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{submission.company}</td>
                          <td className="px-4 py-3 text-sm text-gray-500 max-w-xs truncate">{submission.message}</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{submission.date}</td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${
                              submission.status === "new" ? "bg-blue-100 text-blue-800" :
                              submission.status === "contacted" ? "bg-yellow-100 text-yellow-800" :
                              submission.status === "reviewing" ? "bg-purple-100 text-purple-800" :
                              submission.status === "scheduled" ? "bg-green-100 text-green-800" :
                              "bg-gray-100 text-gray-800"
                            }`}>
                              {submission.status}
                            </span>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium">
                            <div className="flex justify-end gap-2">
                              <button className="text-blue-600 hover:text-blue-900" title="View Details">
                                <FileText className="w-4 h-4" />
                              </button>
                              <button className="text-green-600 hover:text-green-900" title="Mark as Contacted">
                                <CheckCircle className="w-4 h-4" />
                              </button>
                              <button className="text-red-600 hover:text-red-900" title="Delete">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="mt-6 bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {[
                    { action: "New demo request received", user: "Rahul Sharma", time: "2 hours ago", type: "new" },
                    { action: "Contact form submitted", user: "Priya Patel", time: "3 hours ago", type: "form" },
                    { action: "Job application received", user: "Amit Kumar", time: "5 hours ago", type: "job" },
                    { action: "Demo scheduled", user: "Sneha Reddy", time: "1 day ago", type: "scheduled" },
                    { action: "Partnership inquiry closed", user: "Vikram Singh", time: "2 days ago", type: "closed" }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                      <div className={`p-2 rounded-lg ${
                        activity.type === "new" ? "bg-blue-100" :
                        activity.type === "form" ? "bg-green-100" :
                        activity.type === "job" ? "bg-purple-100" :
                        activity.type === "scheduled" ? "bg-yellow-100" :
                        "bg-gray-100"
                      }`}>
                        <MessageSquare className="w-4 h-4 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                        <p className="text-xs text-gray-500">by {activity.user}</p>
                      </div>
                      <span className="text-xs text-gray-500">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "performance" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Performance Reviews</h2>
                <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  <Plus className="w-4 h-4" />
                  New Review
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {employees.map((employee) => (
                  <div key={employee.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{employee.name}</h3>
                        <p className="text-sm text-gray-600">{employee.designation} - {employee.department}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className={`w-5 h-5 ${star <= 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Last Review:</span>
                        <span className="font-medium">2024-01-15</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Next Review:</span>
                        <span className="font-medium">2024-07-15</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Goals Progress:</span>
                        <span className="font-medium text-green-600">85%</span>
                      </div>
                    </div>
                    <button className="mt-4 w-full text-blue-600 hover:text-blue-900 text-sm font-medium">
                      View Full Review →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  );
}
