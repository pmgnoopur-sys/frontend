"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useBlogAuth } from "@/lib/blogAuth";
import { LogOut, ArrowLeft, Plus, FileText, CheckCircle, Download, Globe, MessageSquare, Trash2, Briefcase, Users, X } from 'lucide-react';
import { API_BASE_URL, API_ROOT_URL } from '@/lib/api';

interface Contact {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
  type: string;
  createdAt: string;
  position?: string;
  yearsOfExperience?: string;
  currentCompany?: string;
  expectedSalary?: string;
  noticePeriod?: string;
  coverLetter?: string;
  howDidYouHear?: string;
  resume?: string;
  status?: string;
}

export default function HRDashboard() {
  const { isAuthenticated, isLoading, logout, currentUser, hasRole } = useBlogAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"contact" | "career">("contact");
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [careerApplications, setCareerApplications] = useState<Contact[]>([]);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [selectedApplication, setSelectedApplication] = useState<any>(null);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/blog/adminlogin");
    }
  }, [isAuthenticated, isLoading, router]);

  // Only superadmin and hr-role users may access the HR dashboard.
  useEffect(() => {
    if (!isLoading && isAuthenticated && currentUser && !hasRole("hr")) {
      router.replace("/admin/dashboard");
    }
  }, [isLoading, isAuthenticated, currentUser, hasRole, router]);

  useEffect(() => {
    if (isAuthenticated) {
      loadContacts();
      loadCareerApplications();
    }
  }, [isAuthenticated]);

  const loadContacts = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/contacts`);
      if (response.ok) {
        const data = await response.json();
        setContacts(data.filter((c: Contact) => c.type !== 'career'));
      }
    } catch (error) {
      console.error('Error loading contacts:', error);
    }
  };

  const loadCareerApplications = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/contacts`);
      if (response.ok) {
        const data = await response.json();
        setCareerApplications(data.filter((c: Contact) => c.type === 'career'));
      }
    } catch (error) {
      console.error('Error loading career applications:', error);
    }
  };

  const handleDeleteContact = async (id: string) => {
    if (confirm('Are you sure you want to delete this contact?')) {
      try {
        const response = await fetch(`${API_BASE_URL}/contacts/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          loadContacts();
          loadCareerApplications();
        }
      } catch (error) {
        console.error('Error deleting contact:', error);
      }
    }
  };

  const handleUpdateStatus = async (id: string, newStatus: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/contacts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });
      if (response.ok) {
        loadCareerApplications();
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const handleViewContact = (contact: Contact) => {
    setSelectedContact(contact);
  };

  const handleCloseModal = () => {
    setSelectedContact(null);
    setSelectedApplication(null);
  };

  const handleViewApplication = (application: any) => {
    setSelectedApplication(application);
  };

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

  if (currentUser && !hasRole("hr")) {
    return null;
  }

  const tabs = [
    { id: "contact", label: "Contact", icon: MessageSquare },
    { id: "career", label: "Career", icon: Briefcase },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-gray-900 border-b-2 border-[#FECB0F] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.push("/admin/dashboard")}
              className="flex items-center gap-2 text-white hover:text-[#FECB0F] transition-all duration-300 transform hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Dashboard
            </button>
            <h1 className="text-2xl font-bold text-white">HR Dashboard</h1>
          </div>
          <button
            onClick={logout}
            className="flex items-center gap-2 text-white hover:text-[#FECB0F] transition-all duration-300 transform hover:scale-105"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </header>

      <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
        {/* Sidebar Layout */}
        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-gray-900 rounded-lg shadow-xl border-2 border-[#FECB0F] p-4">
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`${
                        activeTab === tab.id
                          ? "bg-[#FECB0F] text-black border-[#FECB0F] shadow-lg transform scale-105"
                          : "text-white hover:bg-gray-800 hover:text-[#FECB0F] border-transparent hover:border-[#FECB0F]"
                      } w-full flex items-center gap-3 px-4 py-3 rounded-lg border-2 font-medium text-sm transition-all duration-300 transform hover:scale-105`}
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
          <div className="flex-1 bg-gray-900 rounded-lg shadow-xl border-2 border-[#FECB0F] p-6">
          {activeTab === "contact" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-white">Contact Management</h2>
                <button className="flex items-center gap-2 bg-[#FECB0F] text-black px-4 py-2 rounded-md hover:bg-[#FFD54F] transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <Plus className="w-4 h-4" />
                  Add Contact
                </button>
              </div>

              {/* Contact Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-800 rounded-lg shadow-xl border-2 border-[#FECB0F] p-6 hover:border-[#FFD54F] transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#FECB0F] rounded-lg">
                      <MessageSquare className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300">Total Contacts</p>
                      <p className="text-2xl font-bold text-white">{contacts.length}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg shadow-xl border-2 border-[#FECB0F] p-6 hover:border-[#FFD54F] transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#FECB0F] rounded-lg">
                      <CheckCircle className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300">Today's Submissions</p>
                      <p className="text-2xl font-bold text-white">{contacts.filter(c => new Date(c.createdAt).toDateString() === new Date().toDateString()).length}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg shadow-xl border-2 border-[#FECB0F] p-6 hover:border-[#FFD54F] transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#FECB0F] rounded-lg">
                      <FileText className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300">This Week</p>
                      <p className="text-2xl font-bold text-white">{contacts.filter(c => {
                        const weekAgo = new Date();
                        weekAgo.setDate(weekAgo.getDate() - 7);
                        return new Date(c.createdAt) >= weekAgo;
                      }).length}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Table */}
              <div className="bg-gray-800 rounded-lg shadow-xl border-2 border-[#FECB0F] overflow-hidden">
                <div className="px-6 py-4 border-b border-[#FECB0F]">
                  <h3 className="text-lg font-semibold text-white">Contact List</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-900">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-[#FECB0F] uppercase tracking-wider">Name</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-[#FECB0F] uppercase tracking-wider">Email</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-[#FECB0F] uppercase tracking-wider">Phone</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-[#FECB0F] uppercase tracking-wider">Status</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-[#FECB0F] uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-gray-800 divide-y divide-gray-700">
                      {contacts.map((contact) => (
                        <tr key={contact._id} className="hover:bg-gray-700 transition-colors">
                          <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-white">{contact.name}</td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">{contact.email}</td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">{contact.phone || '-'}</td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                              contact.type === 'contact' ? "bg-[#FECB0F] text-black" :
                              contact.type === 'demo' ? "bg-[#FECB0F] text-black" :
                              contact.type === 'career' ? "bg-[#FECB0F] text-black" :
                              "bg-gray-600 text-white"
                            }`}>
                              {contact.type}
                            </span>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">
                            <button 
                              onClick={() => handleViewContact(contact)}
                              className="text-[#FECB0F] hover:text-[#FFD54F] mr-3 transition-colors"
                            >
                              View
                            </button>
                            <button 
                              onClick={() => handleDeleteContact(contact._id)}
                              className="text-red-500 hover:text-red-400 transition-colors"
                            >
                              Delete
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
          {activeTab === "career" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-white">Career & Job Applications</h2>
              </div>

              {/* Career Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-800 rounded-lg shadow-xl border-2 border-[#FECB0F] p-6 hover:border-[#FFD54F] transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#FECB0F] rounded-lg">
                      <Briefcase className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300">Total Applications</p>
                      <p className="text-2xl font-bold text-white">{careerApplications.length}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg shadow-xl border-2 border-[#FECB0F] p-6 hover:border-[#FFD54F] transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#FECB0F] rounded-lg">
                      <Users className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300">Pending Review</p>
                      <p className="text-2xl font-bold text-white">{careerApplications.filter(c => c.status === 'Pending').length}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg shadow-xl border-2 border-[#FECB0F] p-6 hover:border-[#FFD54F] transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#FECB0F] rounded-lg">
                      <CheckCircle className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300">Interviews Scheduled</p>
                      <p className="text-2xl font-bold text-white">{careerApplications.filter(c => c.status === 'Interview').length}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Job Applications Table */}
              <div className="bg-gray-800 rounded-lg shadow-xl border-2 border-[#FECB0F] overflow-hidden">
                <div className="px-6 py-4 border-b border-[#FECB0F]">
                  <h3 className="text-lg font-semibold text-white">Recent Applications</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-900">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-[#FECB0F] uppercase tracking-wider">Applicant</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-[#FECB0F] uppercase tracking-wider">Position</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-[#FECB0F] uppercase tracking-wider">Email</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-[#FECB0F] uppercase tracking-wider">Experience</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-[#FECB0F] uppercase tracking-wider">Status</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-[#FECB0F] uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-gray-800 divide-y divide-gray-700">
                      {careerApplications.map((application) => (
                        <tr key={application._id} className="hover:bg-gray-700 transition-colors">
                          <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-white">{application.name}</td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">{application.position || 'Not specified'}</td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">{application.email}</td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">{application.yearsOfExperience || 'Not specified'}</td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                              application.status === "Interview" ? "bg-[#FECB0F] text-black" :
                              application.status === "Review" ? "bg-[#FECB0F] text-black" :
                              application.status === "Shortlisted" ? "bg-[#FECB0F] text-black" :
                              application.status === "Pending" ? "bg-gray-600 text-white" :
                              application.status === "Rejected" ? "bg-red-600 text-white" :
                              "bg-gray-600 text-white"
                            }`}>
                              {application.status || 'Pending'}
                            </span>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">
                            <button 
                              onClick={() => handleViewApplication(application)}
                              className="text-[#FECB0F] hover:text-[#FFD54F] mr-3 transition-colors"
                            >
                              View
                            </button>
                            <button 
                              onClick={() => handleUpdateStatus(application._id, 'Interview')}
                              className="text-[#FECB0F] hover:text-[#FFD54F] mr-3 transition-colors"
                            >
                              Interview
                            </button>
                            <button 
                              onClick={() => handleUpdateStatus(application._id, 'Rejected')}
                              className="text-red-500 hover:text-red-400 transition-colors"
                            >
                              Reject
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
          </div>
        </div>
      </div>

      {/* Contact Detail Modal */}
      {selectedContact && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={handleCloseModal}>
          <div className="bg-gray-900 rounded-lg shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto border-2 border-[#FECB0F]" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Contact Details</h2>
                <button onClick={handleCloseModal} className="text-gray-400 hover:text-[#FECB0F] transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-sm font-semibold text-[#FECB0F] uppercase mb-2">Personal Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-300">Name</p>
                      <p className="text-lg font-medium text-white">{selectedContact.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-300">Email</p>
                      <p className="text-lg font-medium text-white">{selectedContact.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-300">Phone</p>
                      <p className="text-lg font-medium text-white">{selectedContact.phone || 'Not provided'}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-300">Company</p>
                      <p className="text-lg font-medium text-white">{selectedContact.company || 'Not provided'}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-sm font-semibold text-[#FECB0F] uppercase mb-2">Submission Details</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-300">Type</p>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        selectedContact.type === 'contact' ? "bg-[#FECB0F] text-black" :
                        selectedContact.type === 'demo' ? "bg-[#FECB0F] text-black" :
                        selectedContact.type === 'career' ? "bg-[#FECB0F] text-black" :
                        "bg-gray-600 text-white"
                      }`}>
                        {selectedContact.type}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-300">Submitted Date</p>
                      <p className="text-lg font-medium text-white">{new Date(selectedContact.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-sm font-semibold text-[#FECB0F] uppercase mb-2">Message</h3>
                  <p className="text-gray-100 bg-gray-900 p-4 rounded-lg border border-gray-700">
                    {selectedContact.message}
                  </p>
                </div>

                <div className="flex gap-3 pt-4">
                  <button 
                    onClick={handleCloseModal}
                    className="flex-1 bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-all duration-300 font-medium border border-gray-600"
                  >
                    Close
                  </button>
                  <button 
                    onClick={() => {
                      handleDeleteContact(selectedContact._id);
                      handleCloseModal();
                    }}
                    className="flex-1 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-all duration-300 font-medium"
                  >
                    Delete Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Application Detail Modal */}
      {selectedApplication && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={handleCloseModal}>
          <div className="bg-gray-900 rounded-lg shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto border-2 border-[#FECB0F]" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Application Details</h2>
                <button onClick={handleCloseModal} className="text-gray-400 hover:text-[#FECB0F] transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-sm font-semibold text-[#FECB0F] uppercase mb-2">Applicant Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-300">Name</p>
                      <p className="text-lg font-medium text-white">{selectedApplication.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-300">Email</p>
                      <p className="text-lg font-medium text-white">{selectedApplication.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-300">Phone</p>
                      <p className="text-lg font-medium text-white">{selectedApplication.phone || 'Not provided'}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-300">Position</p>
                      <p className="text-lg font-medium text-white">{selectedApplication.position || 'Not specified'}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-sm font-semibold text-[#FECB0F] uppercase mb-2">Professional Details</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-300">Years of Experience</p>
                      <p className="text-lg font-medium text-white">{selectedApplication.yearsOfExperience || 'Not specified'}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-300">Current Company</p>
                      <p className="text-lg font-medium text-white">{selectedApplication.currentCompany || 'Not specified'}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-300">Expected Salary</p>
                      <p className="text-lg font-medium text-white">{selectedApplication.expectedSalary || 'Not specified'}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-300">Notice Period</p>
                      <p className="text-lg font-medium text-white">{selectedApplication.noticePeriod || 'Not specified'}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-sm font-semibold text-[#FECB0F] uppercase mb-2">Application Details</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-300">Current Status</p>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        selectedApplication.status === "Interview" ? "bg-[#FECB0F] text-black" :
                        selectedApplication.status === "Review" ? "bg-[#FECB0F] text-black" :
                        selectedApplication.status === "Shortlisted" ? "bg-[#FECB0F] text-black" :
                        selectedApplication.status === "Pending" ? "bg-gray-600 text-white" :
                        selectedApplication.status === "Rejected" ? "bg-red-600 text-white" :
                        "bg-gray-600 text-white"
                      }`}>
                        {selectedApplication.status || 'Pending'}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-300">Applied Date</p>
                      <p className="text-lg font-medium text-white">{new Date(selectedApplication.createdAt).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-300">How did they hear about us</p>
                      <p className="text-lg font-medium text-white">{selectedApplication.howDidYouHear || 'Not specified'}</p>
                    </div>
                    {selectedApplication.resume && (
                      <div>
                        <p className="text-sm text-gray-300">Resume</p>
                        <a 
                          href={`${API_ROOT_URL}/uploads/${selectedApplication.resume}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#FECB0F] hover:text-[#FFD54F] flex items-center gap-2 transition-colors"
                        >
                          <Download className="w-4 h-4" />
                          Download Resume
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {selectedApplication.coverLetter && (
                  <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                    <h3 className="text-sm font-semibold text-[#FECB0F] uppercase mb-2">Cover Letter</h3>
                    <p className="text-gray-100 bg-gray-900 p-4 rounded-lg border border-gray-700">
                      {selectedApplication.coverLetter}
                    </p>
                  </div>
                )}

                <div className="flex gap-3 pt-4">
                  <button 
                    onClick={handleCloseModal}
                    className="flex-1 bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-all duration-300 font-medium border border-gray-600"
                  >
                    Close
                  </button>
                  <button 
                    onClick={() => {
                      handleUpdateStatus(selectedApplication._id, 'Interview');
                      handleCloseModal();
                    }}
                    className="flex-1 bg-[#FECB0F] text-black py-2 px-4 rounded-md hover:bg-[#FFD54F] transition-all duration-300 font-medium"
                  >
                    Schedule Interview
                  </button>
                  <button 
                    onClick={() => {
                      handleUpdateStatus(selectedApplication._id, 'Rejected');
                      handleCloseModal();
                    }}
                    className="flex-1 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-all duration-300 font-medium"
                  >
                    Reject Application
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
