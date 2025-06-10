import React from 'react';
import { Phone, Mail, Globe, MapPin, MessageCircle, QrCode, Linkedin, Twitter, Instagram, Facebook, Github, Youtube, Calendar, ExternalLink } from 'lucide-react';
import { ContactInfo, SocialLink, CardTheme } from '../../types';

interface CardPreviewProps {
  contactInfo: ContactInfo;
  socialLinks: SocialLink[];
  theme: CardTheme;
  templateId: string;
}

const CardPreview: React.FC<CardPreviewProps> = ({
  contactInfo,
  socialLinks,
  theme,
  templateId,
}) => {
  const getSocialIcon = (platform: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      linkedin: <Linkedin className="w-5 h-5" />,
      twitter: <Twitter className="w-5 h-5" />,
      facebook: <Facebook className="w-5 h-5" />,
      instagram: <Instagram className="w-5 h-5" />,
      github: <Github className="w-5 h-5" />,
      youtube: <Youtube className="w-5 h-5" />,
      calendly: <Calendar className="w-5 h-5" />,
      portfolio: <ExternalLink className="w-5 h-5" />,
    };
    return iconMap[platform.toLowerCase()] || <ExternalLink className="w-5 h-5" />;
  };

  const cardStyle = {
    background: theme.gradient || theme.background,
    color: theme.text,
  };

  return (
    <div className="max-w-md mx-auto">
      <div 
        className="rounded-3xl shadow-2xl overflow-hidden relative backdrop-blur-lg border border-white/20"
        style={cardStyle}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent" />
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, ${theme.accent}40 0%, transparent 50%), radial-gradient(circle at 80% 20%, ${theme.secondary}40 0%, transparent 50%)`
          }} />
        </div>

        <div className="relative p-8">
          {/* Profile Section */}
          <div className="text-center mb-8">
            <div className="relative mb-6">
              <div className="w-28 h-28 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-full mx-auto flex items-center justify-center text-4xl border-4 border-white/30 shadow-xl">
                👤
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-full border-4 border-white shadow-lg"></div>
            </div>
            <h2 className="text-2xl font-bold mb-2" style={{ color: theme.text }}>
              {contactInfo.name || 'Votre Nom'}
            </h2>
            <p className="text-lg opacity-90 mb-2" style={{ color: theme.text }}>
              {contactInfo.title || 'Votre Titre'}
            </p>
            <p className="opacity-80" style={{ color: theme.text }}>
              {contactInfo.company || 'Votre Entreprise'}
            </p>
          </div>

          {/* Contact Buttons */}
          <div className="space-y-3 mb-8">
            {contactInfo.email && (
              <button 
                className="w-full flex items-center justify-center space-x-3 py-4 px-6 rounded-2xl transition-all hover:scale-105 hover:shadow-lg backdrop-blur-lg border border-white/20"
                style={{ 
                  backgroundColor: theme.accent + '20', 
                  color: theme.accent,
                  borderColor: theme.accent + '30'
                }}
              >
                <Mail className="w-5 h-5" />
                <span className="font-semibold">{contactInfo.email}</span>
              </button>
            )}
            
            {contactInfo.phone && (
              <button 
                className="w-full flex items-center justify-center space-x-3 py-4 px-6 rounded-2xl transition-all hover:scale-105 hover:shadow-lg backdrop-blur-lg border border-white/20"
                style={{ 
                  backgroundColor: theme.accent + '20', 
                  color: theme.accent,
                  borderColor: theme.accent + '30'
                }}
              >
                <Phone className="w-5 h-5" />
                <span className="font-semibold">{contactInfo.phone}</span>
              </button>
            )}

            {contactInfo.whatsapp && (
              <button 
                className="w-full flex items-center justify-center space-x-3 py-4 px-6 rounded-2xl transition-all hover:scale-105 hover:shadow-lg backdrop-blur-lg border border-green-400/30"
                style={{ backgroundColor: '#25D366' + '20', color: '#25D366' }}
              >
                <MessageCircle className="w-5 h-5" />
                <span className="font-semibold">WhatsApp</span>
              </button>
            )}

            {contactInfo.website && (
              <button 
                className="w-full flex items-center justify-center space-x-3 py-4 px-6 rounded-2xl transition-all hover:scale-105 hover:shadow-lg backdrop-blur-lg border border-white/20"
                style={{ 
                  backgroundColor: theme.accent + '20', 
                  color: theme.accent,
                  borderColor: theme.accent + '30'
                }}
              >
                <Globe className="w-5 h-5" />
                <span className="font-semibold">Site Web</span>
              </button>
            )}
          </div>

          {/* Social Links */}
          {socialLinks.length > 0 && (
            <div className="mb-8">
              <h3 className="text-sm font-bold mb-4 opacity-80 uppercase tracking-wider" style={{ color: theme.text }}>
                Connectez-vous avec moi
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {socialLinks.slice(0, 6).map((link, index) => (
                  <button
                    key={index}
                    className="flex flex-col items-center space-y-2 p-4 rounded-2xl transition-all hover:scale-105 hover:shadow-lg backdrop-blur-lg border border-white/20"
                    style={{ 
                      backgroundColor: theme.accent + '15', 
                      color: theme.accent,
                      borderColor: theme.accent + '20'
                    }}
                  >
                    {getSocialIcon(link.platform)}
                    <span className="text-xs font-semibold capitalize">{link.platform}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Address */}
          {contactInfo.address && (
            <div className="flex items-center justify-center space-x-2 text-sm opacity-80 mb-8 p-4 rounded-2xl backdrop-blur-lg border border-white/20">
              <MapPin className="w-4 h-4" />
              <span>{contactInfo.address}</span>
            </div>
          )}

          {/* QR Code */}
          <div className="text-center">
            <div className="w-20 h-20 bg-white/90 backdrop-blur-lg rounded-2xl mx-auto flex items-center justify-center shadow-lg border border-white/30">
              <QrCode className="w-10 h-10 text-gray-600" />
            </div>
            <p className="text-xs opacity-70 mt-3 font-medium">Scanner pour sauvegarder</p>
          </div>

          {/* Branding */}
          <div className="text-center mt-6 pt-4 border-t border-white/20">
            <p className="text-xs opacity-50 font-medium">
              Créé avec E-Card Maker Pro
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPreview;