import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getAllMascotas, getAllFundaciones, getNameFundaciones, getReviews } from '../../redux/Actions/get';
import style from './cards.module.css'; // Ruta del archivo CSS
import fundaciones from './fundacion.png';
import Card from 'react-bootstrap/Card';
import FundacionesFilter from "../Fundación/filterFundacion";
import SortFundaciones from "../Fundación/sortFundacion";
import StarRating from "./StarRating";



export default function CardsFundacion() {
  const dispatch = useDispatch();
  const allFundaciones = useSelector(state => state.fundaciones);
  console.log(allFundaciones)
  useEffect(() => {
    dispatch(getAllMascotas());
    dispatch(getAllFundaciones());
  }, [dispatch]);

  return (
    <div className="fundaciones-container">
      <div className="title-container">
        {/* <h1 className="card-title-highlight">Algunas de nuestras</h1> */}
        <h1 className="card-title-highlight">fundaciones</h1>
      </div>

      {!allFundaciones ? (

        <h3>LOADING...</h3>
      ) : (
        <div className="cards-wrapper">
          {allFundaciones && allFundaciones.map((fundacion, indexFundacion) => (

            fundacion.borrado === false && (
              <Card key={indexFundacion} className={style.card}>
                <Card.Body>
                  <Link to={`/fundacion/${fundacion.id}`}>
                    <Card.Title className="card-title">{fundacion?.nombre}</Card.Title>
                  </Link>
                  <Card.Img variant="top" className="imgFund" src={fundacion.image || fundaciones} />
                  <Card.Text>
                    <h2 className="card-info">Dirección: {fundacion?.direccion}</h2>
                    <h2 className="card-info">Ciudad: {fundacion?.ciudad}</h2>
                    <h2 className="card-info">Email: {fundacion?.email}</h2>
                    <h2 className="card-info">Misión: {fundacion?.mision}</h2>
                    <StarRating rating={Number(fundacion.Reviews && fundacion.Reviews[0]?.calificacion)} />
                  </Card.Text>
                </Card.Body>
              </Card>
            )

          ))}
        </div>
      )}
    </div>
  );
}
