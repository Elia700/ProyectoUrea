import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MolecularComposition from './components/MolecularComposition';
import ApplicationCards from './components/ApplicationCards';
import IndustrialProcess from './components/IndustrialProcess';
import History from './components/History';
import EnvironmentalImpact from './components/EnvironmentalImpact';
import Analysis from './components/Analysis';
import Footer from './components/Footer';

function App() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased overflow-x-hidden">
            <Header />

            <main className="flex flex-col w-full min-h-screen pt-16">
                {/* Todas las secciones en una sola página continua */}
                <Hero />
                <MolecularComposition />
                <ApplicationCards />
                <IndustrialProcess />
                <History />
                <EnvironmentalImpact />
                <Analysis />
                <Footer />
            </main>
        </div>
    );
}

export default App;
