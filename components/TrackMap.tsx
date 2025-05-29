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
  session: string;
};

export default function TrackMap({ session }: TrackMapProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Track Maps</h2>
      <BahrainLayout session={session} />
      <SaudiArabiaLayout session={session} />
      <AustraliaLayout session={session} />
      <JapanLayout session={session} />
      <ChinaLayout session={session} />
      <MiamiLayout session={session} />
      <EmiliaRomagnaLayout session={session} />
      <MonacoLayout session={session} />
      <CanadaLayout session={session} />
      <SpainLayout session={session} />
      <AustriaLayout session={session} />
      <BritainLayout session={session} />
      <HungaryLayout session={session} />
      <BelgiumLayout session={session} />
      <NetherlandsLayout session={session} />
      <ItalyLayout session={session} />
      <AzerbaijanLayout session={session} />
      <SingaporeLayout session={session} />
      <USA_AustinLayout session={session} />
      <MexicoLayout session={session} />
      <BrazilLayout session={session} />
      <LasVegasLayout session={session} />
      <QatarLayout session={session} />
      <AbuDhabiLayout session={session} />
    </div>
  );
}