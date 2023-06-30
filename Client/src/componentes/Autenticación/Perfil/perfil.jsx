import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./perfil.module.css";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user, isAuthenticated, isLoading)

  if (isLoading) {
    return (
      <div>
        <div className={styles.loading}>
          <img src={require("../../../assets/LoadingCat.gif")} alt="cargando" />
        </div>
      </div>
    )
  }

  return (
    isAuthenticated && (
      <div className={styles.container}>
        <h1 className={styles.title}>Mi perfil</h1>
        <div className={styles.infoPrincipal}>
          <img className={styles.image} src={user.picture} alt={user.name} />
          <h2 className={styles.name}>{user.name}</h2>
          <p className={styles.text}>Correo: {user.email}</p>
        </div>
        <h2 className={styles.sub}>Mis peluditos favoritos</h2>
      </div>
    )
  );
};

export default Profile;