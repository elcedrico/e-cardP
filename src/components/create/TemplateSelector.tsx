import React from 'react';
import { Crown } from 'lucide-react';
import Card from '../ui/Card';

interface TemplateSelectorProps {
  selectedTemplate: string;
  onTemplateSelect: (templateId: string) => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({
  selectedTemplate,
  onTemplateSelect,
}) => {
  const templates = [
    {
      id: 'modern-blue',
      name: 'Modern Blue',
      category: 'Professional',
      isPremium: false,
      preview: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
    },
    {
      id: 'creative-gradient',
      name: 'Creative Gradient',
      category: 'Creative',
      isPremium: true,
      preview: 'https://images.pexels.com/photos/6985003/pexels-photo-6985003.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
    },
    {
      id: 'minimal-white',
      name: 'Minimal White',
      category: 'Minimal',
      isPremium: false,
      preview: 'https://images.pexels.com/photos/6985001/pexels-photo-6985001.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
    },
    {
      id: 'dark-professional',
      name: 'Dark Professional',
      category: 'Professional',
      isPremium: true,
      preview: 'https://images.pexels.com/photos/7688965/pexels-photo-7688965.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
    },
    {
      id: 'colorful-modern',
      name: 'Colorful Modern',
      category: 'Creative',
      isPremium: false,
      preview: 'https://images.pexels.com/photos/6985004/pexels-photo-6985004.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
    },
    {
      id: 'elegant-gold',
      name: 'Elegant Gold',
      category: 'Luxury',
      isPremium: true,
      preview: 'https://images.pexels.com/photos/7688340/pexels-photo-7688340.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
    },
  ];

  const categories = ['All', 'Professional', 'Creative', 'Minimal', 'Luxury'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredTemplates = templates.filter(
    template => selectedCategory === 'All' || template.category === selectedCategory
  );

  return (
    <div className="space-y-6">
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

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.map((template) => (
          <Card
            key={template.id}
            hover
            onClick={() => onTemplateSelect(template.id)}
            className={`relative overflow-hidden ${
              selectedTemplate === template.id
                ? 'ring-2 ring-blue-600 shadow-lg'
                : ''
            }`}
          >
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
              {selectedTemplate === template.id && (
                <div className="absolute inset-0 bg-blue-600 bg-opacity-20 flex items-center justify-center">
                  <div className="bg-white rounded-full p-2">
                    <div className="w-4 h-4 bg-blue-600 rounded-full" />
                  </div>
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-900">{template.name}</h3>
              <p className="text-sm text-gray-600">{template.category}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Premium Upsell */}
      <Card className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Unlock Premium Templates
            </h3>
            <p className="text-gray-600">
              Get access to exclusive designs, advanced customization, and more features.
            </p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Upgrade Now
          </button>
        </div>
      </Card>
    </div>
  );
};

export default TemplateSelector;