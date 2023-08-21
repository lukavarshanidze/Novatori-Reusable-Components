"use client";

import HorizontalCard from './components/HorizontalCard/HorizontalCard';
import Icon from "./components/Icon/Icon";
import Player from "./components/Player/Player";
import Products from "./components/Products/Products";
import Filters from "./components/Filters/Filters";
import PlaylistCard from "./components/Playlist Card/PlaylistCard";
import Image from 'next/image'
import Heading from './components/Heading/heading'
import AlbumTable from "./components/AlbumTable/AlbumTable";
import albumsData from "./components/utils/AlbumsData";
import styles from "./page.module.scss";
import VerticalCard from './components/verticalCard/verticalCard';
import ProgressBar from './components/ProgressBar/ProgressBar';
import LeftSideBar from './components/LeftSideBar/LeftSideBar';
import VerticalCardImage from './components/utils/Images/VerticalCardImage.png'
import CardList from './components/CardList/CardList';
import Login from './login/page';
import Register from './register/page';

export default function Home() {
  return (
    <main className={styles.main}>
      <LeftSideBar />
      <Login />
      <Register />
    </main>
  );
}
