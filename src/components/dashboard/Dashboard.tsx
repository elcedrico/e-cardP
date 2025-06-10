import React from 'react';
import { Plus, Eye, MousePointer, Download, TrendingUp, Users, Globe, Crown } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface DashboardProps {
  onCreateCard: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onCreateCard }) => {
  const stats = [
    { 
      name: 'Cartes Créées', 
      value: '3', 
      change: '+2 ce mois',
      icon: Plus, 
      color: 'from-blue-600 to-blue-700',
      bgColor: 'bg-blue-50'
    },
    { 
      name: 'Vues Totales', 
      value: '12,345', 
      change: '+23% ce mois',
      icon: Eye, 
      color: 'from-green-600 to-green-700',
      bgColor: 'bg-green-50'
    },
    { 
      name: 'Clics Totaux', 
      value: '3,456', 
      change: '+18% ce mois',
      icon: MousePointer, 
      color: 'from-purple-600 to-purple-700',
      bgColor: 'bg-purple-50'
    },
    { 
      name: 'Téléchargements', 
      value: '789', 
      change: '+12% ce mois',
      icon: Download, 
      color: 'from-orange-600 to-orange-700',
      bgColor: 'bg-orange-50'
    },
  ];

  const recentCards = [
    {
      id: '1',
      name: 'Carte Business Pro',
      views: 2340,
      clicks: 456,
      downloads: 89,
      conversionRate: 19.5,
      lastUpdated: 'Il y a 2 heures',
      isPublic: true,
      template: 'Modern Blue',
      qrScans: 23,
    },
    {
      id: '2',
      name: 'Portfolio Créatif',
      views: 1890,
      clicks: 234,
      downloads: 67,
      conversionRate: 12.4,
      lastUpdated: 'Il y a 1 jour',
      isPublic: true,
      template: 'Creative Gradient',
      qrScans: 45,
    },
    {
      id: '3',
      name: 'Professionnel Minimal',
      views: 1234,
      clicks: 123,
      downloads: 34,
      conversionRate: 10.0,
      lastUpdated: 'Il y a 3 jours',
      isPublic: false,
      template: 'Minimal White',
      qrScans: 12,
    },
  ];

  const quickActions = [
    {
      title: 'Créer une Nouvelle Carte',
      description: 'Commencez avec un modèle ou créez depuis zéro',
      icon: Plus,
      color: 'from-blue-600 to-purple-600',
      action: onCreateCard,
    },
    {
      title: 'Voir les Analytics',
      description: 'Suivez les performances de vos cartes',
      icon: TrendingUp,
      color: 'from-green-600 to-teal-600',
      action: () => {},
    },
    {
      title: 'Parcourir les Modèles',
      description: 'Découvrez de nouveaux designs premium',
      icon: Globe,
      color: 'from-purple-600 to-pink-600',
      action: () => {},
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Bonjour Jean ! 👋
            </h1>
            <p className="text-gray-600">
              Gérez vos cartes de visite digitales et suivez leurs performances
            </p>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" icon={Crown}>
              Passer au Premium
            </Button>
            <Button onClick={onCreateCard} icon={Plus}>
              Nouvelle Carte
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Card key={stat.name} className="p-6" hover>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  {stat.name}
                </p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                <p className="text-sm text-green-600 font-medium mt-1">{stat.change}</p>
              </div>
              <div className={`p-4 rounded-2xl bg-gradient-to-r ${stat.color} shadow-lg`}>
                <stat.icon className="h-8 w-8 text-white" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Actions Rapides</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickActions.map((action, index) => (
            <Card key={index} hover onClick={action.action} className="p-6 text-center group">
              <div className={`w-16 h-16 bg-gradient-to-r ${action.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <action.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{action.title}</h3>
              <p className="text-gray-600">{action.description}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Cards */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Vos Cartes</h2>
          <Button onClick={onCreateCard} icon={Plus} size="sm">
            Créer
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {recentCards.map((card) => (
            <Card key={card.id} hover className="p-6 group">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {card.name}
                  </h3>
                  <p className="text-sm text-gray-500">{card.template}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    card.isPublic 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {card.isPublic ? 'Publique' : 'Privée'}
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-3 bg-gray-50 rounded-xl">
                  <p className="text-2xl font-bold text-gray-900">{card.views.toLocaleString()}</p>
                  <p className="text-xs text-gray-600">Vues</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-xl">
                  <p className="text-2xl font-bold text-gray-900">{card.clicks}</p>
                  <p className="text-xs text-gray-600">Clics</p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Taux de conversion:</span>
                  <span className="font-semibold text-green-600">{card.conversionRate}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">QR Scans:</span>
                  <span className="font-semibold">{card.qrScans}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Mis à jour:</span>
                  <span className="font-semibold">{card.lastUpdated}</span>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex-1">
                  Modifier
                </Button>
                <Button variant="ghost" size="sm" className="flex-1">
                  Partager
                </Button>
                <Button variant="ghost" size="sm">
                  <TrendingUp className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Upgrade Banner */}
      <Card className="mt-8 p-8 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Crown className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                Débloquez tout le potentiel
              </h3>
              <p className="text-gray-600">
                Accédez aux modèles premium, analytics avancées et fonctionnalités exclusives
              </p>
            </div>
          </div>
          <Button variant="gradient" size="lg" className="hidden md:block">
            Passer au Premium
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;