import React, { useState } from 'react';
import Header from './components/layout/Header';
import Dashboard from './components/dashboard/Dashboard';
import CreateCard from './components/create/CreateCard';
import Templates from './components/templates/Templates';
import Analytics from './components/analytics/Analytics';
import Pricing from './components/pricing/Pricing';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');

  const renderCurrentView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard onCreateCard={() => setCurrentView('create')} />;
      case 'create':
        return <CreateCard onBack={() => setCurrentView('dashboard')} />;
      case 'templates':
        return <Templates />;
      case 'analytics':
        return <Analytics />;
      case 'pricing':
        return <Pricing />;
      default:
        return <Dashboard onCreateCard={() => setCurrentView('create')} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Header currentView={currentView} onViewChange={setCurrentView} />
      <main>
        {renderCurrentView()}
      </main>
    </div>
  );
}

export default App;