import React from 'react';
import BahrainLayout from './tracks/BahrainLayout';
import Saudi_arabiaLayout from './tracks/Saudi_arabiaLayout';
import AustraliaLayout from './tracks/AustraliaLayout';
import JapanLayout from './tracks/JapanLayout';
import ChinaLayout from './tracks/ChinaLayout';
import MiamiLayout from './tracks/MiamiLayout';
import ImolaLayout from './tracks/ImolaLayout';
import MonacoLayout from './tracks/MonacoLayout';
import CanadaLayout from './tracks/CanadaLayout';
import SpainLayout from './tracks/SpainLayout';
import AustriaLayout from './tracks/AustriaLayout';
import Great_britainLayout from './tracks/Great_britainLayout';
import HungaryLayout from './tracks/HungaryLayout';
import BelgiumLayout from './tracks/BelgiumLayout';
import NetherlandsLayout from './tracks/NetherlandsLayout';
import ItalyLayout from './tracks/ItalyLayout';
import AzerbaijanLayout from './tracks/AzerbaijanLayout';
import SingaporeLayout from './tracks/SingaporeLayout';
import UsaLayout from './tracks/UsaLayout';
import MexicoLayout from './tracks/MexicoLayout';
import BrazilLayout from './tracks/BrazilLayout';
import Las_vegasLayout from './tracks/Las_vegasLayout';
import QatarLayout from './tracks/QatarLayout';
import Abu_dhabiLayout from './tracks/Abu_dhabiLayout';

const layouts = {
  Bahrain: BahrainLayout,
  Saudi_arabia: Saudi_arabiaLayout,
  Australia: AustraliaLayout,
  Japan: JapanLayout,
  China: ChinaLayout,
  Miami: MiamiLayout,
  Imola: ImolaLayout,
  Monaco: MonacoLayout,
  Canada: CanadaLayout,
  Spain: SpainLayout,
  Austria: AustriaLayout,
  Great_britain: Great_britainLayout,
  Hungary: HungaryLayout,
  Belgium: BelgiumLayout,
  Netherlands: NetherlandsLayout,
  Italy: ItalyLayout,
  Azerbaijan: AzerbaijanLayout,
  Singapore: SingaporeLayout,
  Usa: UsaLayout,
  Mexico: MexicoLayout,
  Brazil: BrazilLayout,
  Las_vegas: Las_vegasLayout,
  Qatar: QatarLayout,
  Abu_dhabi: Abu_dhabiLayout,
};

type TrackMapProps = {
  currentTrack: keyof typeof layouts;
};

export default function TrackMap({ currentTrack }: TrackMapProps) {
  const Layout = layouts[currentTrack] || (() => <div>No layout found.</div>);
  return (
    <div className="track-map-wrapper p-4 bg-gray-900 rounded-xl shadow-md">
      <Layout />
    </div>
  );
}
