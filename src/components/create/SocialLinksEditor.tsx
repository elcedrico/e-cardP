import React from 'react';
import { Plus, X } from 'lucide-react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { SocialLink } from '../../types';

interface SocialLinksEditorProps {
  socialLinks: SocialLink[];
  onSocialLinksChange: (links: SocialLink[]) => void;
}

const SocialLinksEditor: React.FC<SocialLinksEditorProps> = ({
  socialLinks,
  onSocialLinksChange,
}) => {
  const platforms = [
    'LinkedIn', 'Twitter', 'Facebook', 'Instagram', 'YouTube', 'TikTok', 'GitHub', 'Portfolio'
  ];

  const addSocialLink = () => {
    onSocialLinksChange([
      ...socialLinks,
      { platform: 'LinkedIn', url: '', icon: 'linkedin' }
    ]);
  };

  const removeSocialLink = (index: number) => {
    onSocialLinksChange(socialLinks.filter((_, i) => i !== index));
  };

  const updateSocialLink = (index: number, field: 'platform' | 'url', value: string) => {
    const updatedLinks = socialLinks.map((link, i) => 
      i === index 
        ? { ...link, [field]: value, icon: field === 'platform' ? value.toLowerCase() : link.icon }
        : link
    );
    onSocialLinksChange(updatedLinks);
  };

  return (
    <div className="space-y-4">
      {socialLinks.map((link, index) => (
        <div key={index} className="flex gap-3 items-end">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Platform
            </label>
            <select
              value={link.platform}
              onChange={(e) => updateSocialLink(index, 'platform', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {platforms.map((platform) => (
                <option key={platform} value={platform}>
                  {platform}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-2">
            <Input
              label="URL"
              value={link.url}
              onChange={(value) => updateSocialLink(index, 'url', value)}
              placeholder="https://linkedin.com/in/yourname"
            />
          </div>
          <Button
            variant="ghost"
            size="sm"
            icon={X}
            onClick={() => removeSocialLink(index)}
            className="text-red-600 hover:text-red-700 hover:bg-red-50"
          />
        </div>
      ))}
      
      <Button
        variant="outline"
        icon={Plus}
        onClick={addSocialLink}
        className="w-full"
      >
        Add Social Link
      </Button>
    </div>
  );
};

export default SocialLinksEditor;