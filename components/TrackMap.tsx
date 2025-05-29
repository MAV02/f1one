'use client';

import React from 'react';
import BahrainLayout from './tracks/BahrainLayout';
import SaudiArabiaLayout from './tracks/SaudiArabiaLayout';
import AustraliaLayout from './tracks/AustraliaLayout';
import JapanLayout from './tracks/JapanLayout';
import ChinaLayout from './tracks/ChinaLayout';
import MiamiLayout from './tracks/MiamiLayout';
import EmiliaRomagnaLayout from './tracks/EmiliaRomagnaLayout';
import MonacoLayout from './tracks/MonacoLayout';
import CanadaLayout from './tracks/CanadaLayout';
import SpainLayout from './tracks/SpainLayout';
import AustriaLayout from './tracks/AustriaLayout';
import BritainLayout from './tracks/BritainLayout';
import HungaryLayout from './tracks/HungaryLayout';
import BelgiumLayout from './tracks/BelgiumLayout';
import NetherlandsLayout from './tracks/NetherlandsLayout';
import ItalyLayout from './tracks/ItalyLayout';
import AzerbaijanLayout from './tracks/AzerbaijanLayout';
import SingaporeLayout from './tracks/SingaporeLayout';
import USA_AustinLayout from './tracks/USA_AustinLayout';
import MexicoLayout from './tracks/MexicoLayout';
import BrazilLayout from './tracks/BrazilLayout';
import LasVegasLayout from './tracks/LasVegasLayout';
import QatarLayout from './tracks/QatarLayout';
import AbuDhabiLayout from './tracks/AbuDhabiLayout';

type TrackMapProps = {
  currentTrack: string;
};

export default function TrackMap({ currentTrack }: TrackMapProps) {
  const renderTrackLayout = () => {
    switch (currentTrack) {
      case 'Bahrain': return <BahrainLayout />;
      case 'Saudi Arabia': return <SaudiArabiaLayout />;
      case 'Australia': return <AustraliaLayout />;
      case 'Japan': return <JapanLayout />;
      case 'China': return <ChinaLayout />;
      case 'Miami': return <MiamiLayout />;
      case 'Emilia Romagna': return <EmiliaRomagnaLayout />;
      case 'Monaco': return <MonacoLayout />;
      case 'Canada': return <CanadaLayout />;
      case 'Spain': return <SpainLayout />;
      case 'Austria': return <AustriaLayout />;
      case 'Britain': return <BritainLayout />;
      case 'Hungary': return <HungaryLayout />;
      case 'Belgium': return <BelgiumLayout />;
      case 'Netherlands': return <NetherlandsLayout />;
      case 'Italy': return <ItalyLayout />;
      case 'Azerbaijan': return <AzerbaijanLayout />;
      case 'Singapore': return <SingaporeLayout />;
      case 'USA (Austin)': return <USA_AustinLayout />;
      case 'Mexico': return <MexicoLayout />;
      case 'Brazil': return <BrazilLayout />;
      case 'Las Vegas': return <LasVegasLayout />;
      case 'Qatar': return <QatarLayout />;
      case 'Abu Dhabi': return <AbuDhabiLayout />;
      default: return <div className="text-gray-400 text-sm">No track layout available.</div>;
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      {renderTrackLayout()}
    </div>
  );
}
