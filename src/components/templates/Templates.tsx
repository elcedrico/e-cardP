import React from 'react';
import { Search, Filter, Crown } from 'lucide-react';
import Card from '../ui/Card';
import Input from '../ui/Input';
import Button from '../ui/Button';

const Templates: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const categories = ['All', 'Professional', 'Creative', 'Minimal', 'Luxury', 'Modern'];
  
  const templates = [
    {
      id: 'modern-blue',
      name: 'Modern Blue',
      category: 'Professional',
      isPremium: false,
      preview: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
      description: 'Clean and professional design perfect for corporate use.',
      uses: 1234,
    },
    {
      id: 'creative-gradient',
      name: 'Creative Gradient',
      category: 'Creative',
      isPremium: true,
      preview: 'https://images.pexels.com/photos/6985003/pexels-photo-6985003.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
      description: 'Vibrant gradient design for creative professionals.',
      uses: 856,
    },
    {
      id: 'minimal-white',
      name: 'Minimal White',
      category: 'Minimal',
      isPremium: false,
      preview: 'https://images.pexels.com/photos/6985001/pexels-photo-6985001.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
      description: 'Simple and elegant minimal design.',
      uses: 2341,
    },
    {
      id: 'dark-professional',
      name: 'Dark Professional',
      category: 'Professional',
      isPremium: true,
      preview: 'https://images.pexels.com/photos/7688965/pexels-photo-7688965.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
      description: 'Sophisticated dark theme for modern professionals.',
      uses: 567,
    },
    {
      id: 'colorful-modern',
      name: 'Colorful Modern',
      category: 'Modern',
      isPremium: false,
      preview: 'https://images.pexels.com/photos/6985004/pexels-photo-6985004.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
      description: 'Modern design with bold colors and clean lines.',
      uses: 1789,
    },
    {
      id: 'elegant-gold',
      name: 'Elegant Gold',
      category: 'Luxury',
      isPremium: true,
      preview: 'https://images.pexels.com/photos/7688340/pexels-photo-7688340.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
      description: 'Luxurious gold accent design for premium branding.',
      uses: 432,
    },
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesCategory = selectedCategory === 'All' || template.category === selectedCategory;
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Template Gallery</h1>
        <p className="text-gray-600">Choose from our collection of professionally designed templates</p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="flex-1">
            <Input
              value={searchTerm}
              onChange={setSearchTerm}
              placeholder="Search templates..."
              className="w-full"
            />
          </div>
          <Button variant="outline" icon={Filter}>
            More Filters
          </Button>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredTemplates.map((template) => (
          <Card key={template.id} hover className="overflow-hidden">
            <div className="aspect-[3/2] bg-gradient-to-br from-blue-50 to-purple-50 relative">
              <img
                src={template.preview}
                alt={template.name}
                className="w-full h-full object-cover"
              />
              {template.isPremium && (
                <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-medium flex items-center">
                  <Crown className="w-3 h-3 mr-1" />
                  Pro
                </div>
              )}
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-gray-900">{template.name}</h3>
                <span className="text-xs text-gray-500">{template.uses} uses</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">{template.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {template.category}
                </span>
                <Button size="sm">
                  Use Template
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Premium Upsell */}
      <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <div className="text-center max-w-2xl mx-auto">
          <Crown className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Unlock Premium Templates
          </h2>
          <p className="text-gray-600 mb-6">
            Get access to our entire collection of premium templates, advanced customization options, 
            and exclusive features to make your digital business cards stand out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              Upgrade to Pro - $9/month
            </Button>
            <Button variant="outline" size="lg">
              View Pricing
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Templates;