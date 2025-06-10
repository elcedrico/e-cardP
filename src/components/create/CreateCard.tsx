import React, { useState } from 'react';
import { ArrowLeft, Save, Eye, Share2, QrCode, Palette, User, Link, Settings } from 'lucide-react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Card from '../ui/Card';
import CardPreview from './CardPreview';
import TemplateSelector from './TemplateSelector';
import SocialLinksEditor from './SocialLinksEditor';
import { ContactInfo, SocialLink, CardTheme } from '../../types';

interface CreateCardProps {
  onBack: () => void;
}

const CreateCard: React.FC<CreateCardProps> = ({ onBack }) => {
  const [step, setStep] = useState<'template' | 'customize' | 'preview'>('template');
  const [selectedTemplate, setSelectedTemplate] = useState<string>('');
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    name: '',
    title: '',
    company: '',
    email: '',
    phone: '',
    website: '',
    address: '',
    whatsapp: '',
  });
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);
  const [theme, setTheme] = useState<CardTheme>({
    id: 'default',
    name: 'Default',
    background: '#ffffff',
    text: '#1f2937',
    accent: '#3b82f6',
    secondary: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  });

  const predefinedThemes: CardTheme[] = [
    {
      id: 'ocean',
      name: 'Ocean',
      background: '#ffffff',
      text: '#1e293b',
      accent: '#0ea5e9',
      secondary: '#06b6d4',
      gradient: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
    },
    {
      id: 'sunset',
      name: 'Sunset',
      background: '#ffffff',
      text: '#1e293b',
      accent: '#f97316',
      secondary: '#ef4444',
      gradient: 'linear-gradient(135deg, #f97316 0%, #ef4444 100%)',
    },
    {
      id: 'forest',
      name: 'Forest',
      background: '#ffffff',
      text: '#1e293b',
      accent: '#059669',
      secondary: '#10b981',
      gradient: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
    },
    {
      id: 'royal',
      name: 'Royal',
      background: '#ffffff',
      text: '#1e293b',
      accent: '#7c3aed',
      secondary: '#a855f7',
      gradient: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
    },
  ];

  const handleNext = () => {
    if (step === 'template') setStep('customize');
    else if (step === 'customize') setStep('preview');
  };

  const handlePrevious = () => {
    if (step === 'preview') setStep('customize');
    else if (step === 'customize') setStep('template');
    else onBack();
  };

  const stepConfig = {
    template: { title: 'Choisir un Modèle', icon: Eye, step: 1 },
    customize: { title: 'Personnaliser', icon: Palette, step: 2 },
    preview: { title: 'Aperçu & Publication', icon: Settings, step: 3 },
  };

  const renderStepContent = () => {
    switch (step) {
      case 'template':
        return (
          <TemplateSelector
            selectedTemplate={selectedTemplate}
            onTemplateSelect={setSelectedTemplate}
          />
        );
      case 'customize':
        return (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <div className="space-y-8">
              {/* Contact Information */}
              <Card className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Informations de Contact</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Nom Complet"
                    value={contactInfo.name}
                    onChange={(value) => setContactInfo({...contactInfo, name: value})}
                    placeholder="Jean Dupont"
                    required
                    icon={User}
                  />
                  <Input
                    label="Titre/Poste"
                    value={contactInfo.title}
                    onChange={(value) => setContactInfo({...contactInfo, title: value})}
                    placeholder="Développeur Full-Stack"
                  />
                  <Input
                    label="Entreprise"
                    value={contactInfo.company}
                    onChange={(value) => setContactInfo({...contactInfo, company: value})}
                    placeholder="Tech Innovation SAS"
                  />
                  <Input
                    label="Email"
                    type="email"
                    value={contactInfo.email}
                    onChange={(value) => setContactInfo({...contactInfo, email: value})}
                    placeholder="jean@entreprise.com"
                    required
                  />
                  <Input
                    label="Téléphone"
                    type="tel"
                    value={contactInfo.phone}
                    onChange={(value) => setContactInfo({...contactInfo, phone: value})}
                    placeholder="+33 6 12 34 56 78"
                  />
                  <Input
                    label="Site Web"
                    type="url"
                    value={contactInfo.website}
                    onChange={(value) => setContactInfo({...contactInfo, website: value})}
                    placeholder="https://monsite.com"
                  />
                  <Input
                    label="WhatsApp"
                    type="tel"
                    value={contactInfo.whatsapp}
                    onChange={(value) => setContactInfo({...contactInfo, whatsapp: value})}
                    placeholder="+33 6 12 34 56 78"
                    className="md:col-span-2"
                  />
                  <Input
                    label="Adresse"
                    value={contactInfo.address}
                    onChange={(value) => setContactInfo({...contactInfo, address: value})}
                    placeholder="123 Rue de la Paix, 75001 Paris"
                    className="md:col-span-2"
                  />
                </div>
              </Card>

              {/* Social Links */}
              <Card className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                    <Link className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Réseaux Sociaux</h3>
                </div>
                <SocialLinksEditor
                  socialLinks={socialLinks}
                  onSocialLinksChange={setSocialLinks}
                />
              </Card>

              {/* Theme Selection */}
              <Card className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-600 to-red-600 rounded-xl flex items-center justify-center">
                    <Palette className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Thème & Couleurs</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {predefinedThemes.map((themeOption) => (
                    <button
                      key={themeOption.id}
                      onClick={() => setTheme(themeOption)}
                      className={`p-4 rounded-2xl border-2 transition-all ${
                        theme.id === themeOption.id
                          ? 'border-blue-500 shadow-lg scale-105'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div 
                        className="w-full h-12 rounded-xl mb-2"
                        style={{ background: themeOption.gradient }}
                      />
                      <p className="text-sm font-semibold text-gray-900">{themeOption.name}</p>
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Arrière-plan</label>
                    <input
                      type="color"
                      value={theme.background}
                      onChange={(e) => setTheme({...theme, background: e.target.value})}
                      className="w-full h-12 rounded-xl border-2 border-gray-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Texte</label>
                    <input
                      type="color"
                      value={theme.text}
                      onChange={(e) => setTheme({...theme, text: e.target.value})}
                      className="w-full h-12 rounded-xl border-2 border-gray-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Accent</label>
                    <input
                      type="color"
                      value={theme.accent}
                      onChange={(e) => setTheme({...theme, accent: e.target.value})}
                      className="w-full h-12 rounded-xl border-2 border-gray-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Secondaire</label>
                    <input
                      type="color"
                      value={theme.secondary}
                      onChange={(e) => setTheme({...theme, secondary: e.target.value})}
                      className="w-full h-12 rounded-xl border-2 border-gray-200"
                    />
                  </div>
                </div>
              </Card>
            </div>

            <div className="xl:sticky xl:top-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Aperçu en Temps Réel</h3>
                <CardPreview
                  contactInfo={contactInfo}
                  socialLinks={socialLinks}
                  theme={theme}
                  templateId={selectedTemplate}
                />
              </Card>
            </div>
          </div>
        );
      case 'preview':
        return (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <div className="space-y-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Aperçu Final</h3>
                <CardPreview
                  contactInfo={contactInfo}
                  socialLinks={socialLinks}
                  theme={theme}
                  templateId={selectedTemplate}
                />
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button icon={QrCode} variant="outline" fullWidth>
                  Télécharger QR Code
                </Button>
                <Button icon={Share2} variant="outline" fullWidth>
                  Obtenir le Lien
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Paramètres de la Carte</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <span className="font-semibold text-gray-900">Rendre Publique</span>
                      <p className="text-sm text-gray-600">Visible dans les moteurs de recherche</p>
                    </div>
                    <input type="checkbox" className="w-5 h-5 rounded text-blue-600" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <span className="font-semibold text-gray-900">Activer les Analytics</span>
                      <p className="text-sm text-gray-600">Suivre les vues et interactions</p>
                    </div>
                    <input type="checkbox" className="w-5 h-5 rounded text-blue-600" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <span className="font-semibold text-gray-900">Autoriser les Téléchargements</span>
                      <p className="text-sm text-gray-600">Permettre la sauvegarde vCard</p>
                    </div>
                    <input type="checkbox" className="w-5 h-5 rounded text-blue-600" defaultChecked />
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">URL de la Carte</h3>
                <Input
                  value="e-cardmakerpro.com/jean-dupont"
                  onChange={() => {}}
                  placeholder="URL personnalisée"
                  helper="Votre URL unique que vous pouvez partager avec d'autres."
                />
              </Card>

              <Card className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    🎉 Votre carte est prête !
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Partagez votre nouvelle carte de visite digitale avec le monde entier.
                  </p>
                  <Button variant="gradient" size="lg" fullWidth>
                    Publier la Carte
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const currentStepConfig = stepConfig[step];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <Button
            variant="ghost"
            icon={ArrowLeft}
            onClick={handlePrevious}
            className="mr-4"
          >
            Retour
          </Button>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
              <currentStepConfig.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {currentStepConfig.title}
              </h1>
              <p className="text-gray-600">
                Étape {currentStepConfig.step} sur 3
              </p>
            </div>
          </div>
        </div>

        <div className="flex space-x-3">
          {step === 'preview' && (
            <Button icon={Save} variant="outline">
              Sauvegarder
            </Button>
          )}
          <Button
            onClick={step === 'preview' ? () => {} : handleNext}
            disabled={step === 'template' && !selectedTemplate}
            variant={step === 'preview' ? 'gradient' : 'primary'}
          >
            {step === 'preview' ? 'Publier la Carte' : 'Suivant'}
          </Button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center">
          {[1, 2, 3].map((stepNumber) => (
            <React.Fragment key={stepNumber}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                stepNumber <= currentStepConfig.step
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-400'
              }`}>
                {stepNumber}
              </div>
              {stepNumber < 3 && (
                <div className={`flex-1 h-2 mx-4 rounded-full transition-all ${
                  stepNumber < currentStepConfig.step
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600'
                    : 'bg-gray-200'
                }`} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Step Content */}
      {renderStepContent()}
    </div>
  );
};

export default CreateCard;