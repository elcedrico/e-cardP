import React from 'react';
import { Check, Crown, Zap, Building2, Star } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const Pricing: React.FC = () => {
  const plans = [
    {
      id: 'free',
      name: 'Gratuit',
      price: 0,
      currency: '€',
      interval: 'mois',
      description: 'Parfait pour commencer',
      features: [
        '1 e-carte de visite',
        'Modèles de base',
        'Partage par lien',
        'QR Code inclus',
        'Statistiques basiques',
        'Support communautaire'
      ],
      maxCards: 1,
      customBranding: false,
      analytics: false,
      priority: false,
      popular: false,
      buttonText: 'Commencer Gratuitement',
      buttonVariant: 'outline' as const,
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 9,
      currency: '€',
      interval: 'mois',
      description: 'Pour les professionnels',
      features: [
        '5 e-cartes de visite',
        'Tous les modèles premium',
        'Personnalisation avancée',
        'Analytics détaillées',
        'URL personnalisée',
        'Suppression du branding',
        'Export haute qualité',
        'Support prioritaire'
      ],
      maxCards: 5,
      customBranding: true,
      analytics: true,
      priority: true,
      popular: true,
      buttonText: 'Choisir Premium',
      buttonVariant: 'gradient' as const,
    },
    {
      id: 'business',
      name: 'Business',
      price: 29,
      currency: '€',
      interval: 'mois',
      description: 'Pour les équipes et entreprises',
      features: [
        'E-cartes illimitées',
        'Gestion multi-utilisateurs',
        'Branding personnalisé',
        'Analytics avancées',
        'Intégrations CRM',
        'API complète',
        'Formation dédiée',
        'Support 24/7'
      ],
      maxCards: -1,
      customBranding: true,
      analytics: true,
      priority: true,
      popular: false,
      buttonText: 'Choisir Business',
      buttonVariant: 'secondary' as const,
    },
  ];

  const features = [
    {
      icon: Crown,
      title: 'Design Premium',
      description: 'Accès à notre bibliothèque complète de modèles professionnels'
    },
    {
      icon: Zap,
      title: 'Performance Optimisée',
      description: 'Chargement ultra-rapide et expérience utilisateur fluide'
    },
    {
      icon: Building2,
      title: 'Solution Entreprise',
      description: 'Outils avancés pour les équipes et organisations'
    },
    {
      icon: Star,
      title: 'Support Expert',
      description: 'Accompagnement personnalisé par nos experts'
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Choisissez votre plan
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Des solutions adaptées à tous vos besoins de networking digital
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {plans.map((plan) => (
          <Card
            key={plan.id}
            className={`relative p-8 ${
              plan.popular 
                ? 'ring-4 ring-blue-500/20 shadow-2xl scale-105' 
                : ''
            }`}
            gradient={plan.popular}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  ⭐ Plus Populaire
                </div>
              </div>
            )}

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <div className="flex items-baseline justify-center">
                <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-xl text-gray-600 ml-1">{plan.currency}</span>
                <span className="text-gray-500 ml-2">/{plan.interval}</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              variant={plan.buttonVariant}
              fullWidth
              size="lg"
              className="mt-auto"
            >
              {plan.buttonText}
            </Button>
          </Card>
        ))}
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {features.map((feature, index) => (
          <Card key={index} className="p-6 text-center" hover>
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <feature.icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </Card>
        ))}
      </div>

      {/* FAQ Section */}
      <Card className="p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Questions Fréquentes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Puis-je changer de plan à tout moment ?
            </h3>
            <p className="text-gray-600 text-sm">
              Oui, vous pouvez upgrader ou downgrader votre plan à tout moment. 
              Les changements prennent effet immédiatement.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Y a-t-il une période d'essai ?
            </h3>
            <p className="text-gray-600 text-sm">
              Le plan gratuit vous permet de tester nos fonctionnalités de base. 
              Les plans payants offrent une garantie satisfait ou remboursé de 30 jours.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Mes données sont-elles sécurisées ?
            </h3>
            <p className="text-gray-600 text-sm">
              Absolument. Nous utilisons un chiffrement de niveau bancaire et 
              respectons le RGPD pour protéger vos données.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Puis-je exporter mes cartes ?
            </h3>
            <p className="text-gray-600 text-sm">
              Oui, vous pouvez exporter vos cartes en haute qualité (PNG, PDF) 
              et générer des QR codes pour un partage physique.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Pricing;