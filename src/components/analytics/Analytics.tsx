import React from 'react';
import { Eye, MousePointer, Download, TrendingUp, Calendar, Users } from 'lucide-react';
import Card from '../ui/Card';

const Analytics: React.FC = () => {
  const stats = [
    { name: 'Total Views', value: '12,345', change: '+12%', icon: Eye, color: 'text-blue-600' },
    { name: 'Total Clicks', value: '3,456', change: '+8%', icon: MousePointer, color: 'text-green-600' },
    { name: 'Downloads', value: '789', change: '+15%', icon: Download, color: 'text-purple-600' },
    { name: 'Conversion Rate', value: '28%', change: '+3%', icon: TrendingUp, color: 'text-orange-600' },
  ];

  const cardPerformance = [
    { name: 'Business Card', views: 5234, clicks: 1456, downloads: 345, ctr: '28%' },
    { name: 'Creative Portfolio', views: 3456, clicks: 987, downloads: 234, ctr: '29%' },
    { name: 'Minimal Professional', views: 2345, clicks: 567, downloads: 123, ctr: '24%' },
  ];

  const recentActivity = [
    { action: 'Card viewed', card: 'Business Card', time: '2 minutes ago', location: 'New York, US' },
    { action: 'Contact downloaded', card: 'Creative Portfolio', time: '5 minutes ago', location: 'London, UK' },
    { action: 'WhatsApp clicked', card: 'Business Card', time: '8 minutes ago', location: 'Toronto, CA' },
    { action: 'Website visited', card: 'Minimal Professional', time: '12 minutes ago', location: 'Sydney, AU' },
    { action: 'Email clicked', card: 'Business Card', time: '15 minutes ago', location: 'Berlin, DE' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
        <p className="text-gray-600">Track your digital business cards' performance and engagement</p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Card key={stat.name} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <p className="text-sm text-green-600 mt-1">{stat.change} from last month</p>
              </div>
              <div className={`p-3 rounded-lg bg-gray-50 ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Chart Placeholder */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Views Over Time</h3>
          <div className="h-64 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-2" />
              <p className="text-gray-600">Interactive chart would go here</p>
              <p className="text-sm text-gray-500">Showing views, clicks, and downloads over time</p>
            </div>
          </div>
        </Card>

        {/* Geographic Data */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Locations</h3>
          <div className="space-y-4">
            {[
              { country: 'United States', views: 4234, percentage: 35 },
              { country: 'United Kingdom', views: 2456, percentage: 20 },
              { country: 'Canada', views: 1789, percentage: 15 },
              { country: 'Australia', views: 1234, percentage: 10 },
              { country: 'Germany', views: 987, percentage: 8 },
            ].map((location) => (
              <div key={location.country} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-full mr-3" />
                  <span className="text-sm font-medium text-gray-900">{location.country}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">{location.views}</span>
                  <div className="w-16 h-2 bg-gray-200 rounded-full">
                    <div 
                      className="h-full bg-blue-600 rounded-full"
                      style={{ width: `${location.percentage}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Card Performance */}
      <Card className="p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Card Performance</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-900">Card Name</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Views</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Clicks</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Downloads</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">CTR</th>
              </tr>
            </thead>
            <tbody>
              {cardPerformance.map((card, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium text-gray-900">{card.name}</td>
                  <td className="py-3 px-4 text-gray-600">{card.views.toLocaleString()}</td>
                  <td className="py-3 px-4 text-gray-600">{card.clicks.toLocaleString()}</td>
                  <td className="py-3 px-4 text-gray-600">{card.downloads.toLocaleString()}</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                      {card.ctr}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Recent Activity */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
          <button className="text-sm text-blue-600 hover:text-blue-700">View All</button>
        </div>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {activity.action} • {activity.card}
                  </p>
                  <p className="text-xs text-gray-500">{activity.location}</p>
                </div>
              </div>
              <span className="text-xs text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Analytics;