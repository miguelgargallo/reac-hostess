import React, { useState, useCallback } from "react";

function Body() {
  return (
    <div className="wrapper">
      <img src="" />
      <Card
        img="https://bcnhostess.com/wp-content/uploads/Tinder.jpg"
        title="Tinder"
        tags="Eventos, Street Marketing"
        description="Evento en el Hotel Wela, en donde se informo el funcionamiento de la aplicación"
      />

      <Card
        img="https://bcnhostess.com/wp-content/uploads/perrier-1.jpg"
        title="Perrier"
        tags=" Bebidas, Eventos, Festival, Sampling"
        description=" Evento con Perrier en festivales: Madrid - Mercado de diseño, Mercado de Motores, Mulafest / Barcelona - Estacio Disenny, Monumental "
      />

      <Card
        img="https://bcnhostess.com/wp-content/uploads/VICE4.jpg"
        title="VICE"
        tags="Eventos, Fashion"
        description=" Festival Cara B, es un festival de cultura musical independiente y urbana, que se celebra en Barcelona, se posiciona como el principal escaparate de las tendencias musicales y los sonidos más frescos del momento. "
      />

      <Card
        img="https://bcnhostess.com/wp-content/uploads/Samsung.jpg"
        title="Samsung"
        tags="Eventos"
        description="vento privado para invitados del MWC (mobile World congress)."
      />
      <Card
        img="https://bcnhostess.com/wp-content/uploads/Figaro2-1.jpg"
        title="Figaro"
        tags="Eventos, Peluquería"
        description=" Premios Fígaro. El evento más importante del calendario de la peluquería española, donde se presentaron las quince colecciones finalistas antes de la entrega de galardones."
      />
      <Card
        img="https://bcnhostess.com/wp-content/uploads/Movistar-1-1.jpg"
        title="Movistar"
        tags="Eventos, Fashion"
        description=" Durante años fuimos los responsable de proveer el staff para grandes premios no solo de F1 sino que también de Moto GP, conocemos muy bien los protocolos de actuación en los circuitos."
      />
      <Card
        img="https://bcnhostess.com/wp-content/uploads/Telefonica-2.jpg"
        title="Telefónica"
        tags="Eventos, Eventos deportivos"
        description=" Proveedores oficiales durante 4 años, evento realizado en Diagonal 00 Torre Telefónica."
      />
      <Card
        img="https://bcnhostess.com/wp-content/uploads/IQOS_3.2.jpg"
        title="IQOS"
        tags="Eventos, In Store"
        description=" Co_Lab Café by IQOS, Madrid. Espacio en el que nuestros expertos te asesorarán sobre este nuevo dispositivo electrónico que calienta el tabaco en lugar de quemarlo y te resolverán cualquier duda o incidencia. Pensado para reunir diversas personalidades, conectar ideas, promocionar la experimentación y compartir ejemplos sobre transformación y cambio."
      />
      <Card
        img="https://bcnhostess.com/wp-content/uploads/VIKINGO.jpg"
        title="Vikingo"
        tags="Bebidas, Eventos"
        description=" Evento realizado en el congreso CCIB (centre convencions internacional Barcelona)."
      />
      <Card
        img="https://bcnhostess.com/wp-content/uploads/Corona.jpg"
        title="Corona"
        tags="Bebidas, Eventos, Street Marketing"
        description=" Campaña de verano realizada en Barcelona y alrededores. "
      />
      <Card
        img="https://bcnhostess.com/wp-content/uploads/ee318ded-4f4b-44d0-8472-c82b1aa302ea-1.jpg"
        title="Beefeater"
        tags="Bebidas, Eventos, Street Marketing"
        description=" Evento con Beefeater en Mad Cool Festival. Festival de música que se realiza en Madrid en donde el arte, la moda, la gastronomía y el turismo se unen eclécticamente."
      />
      <Card
        img="https://bcnhostess.com/wp-content/uploads/Montibello0.jpg"
        title="Montibello"
        tags="Eventos, Peluquería"
        description="Gala realizada en la feria Cosmo Beauty. Montibello hoy es uno de nuestros principales clientes, dedicada a la fabricación y distribución de productos de cosmética profesional."
      />
      <Card
        img="https://bcnhostess.com/wp-content/uploads/Adidas_1.jpg"
        title="Adidas"
        tags="Eventos deportivos, Motor"
        description="Presentación nuevo lanzamiento, en el Gran Premio de España F1, Montemelo, circuito de Catalunya."
      />
      <Card
        img="https://bcnhostess.com/wp-content/uploads/MYM.jpg"
        title="M&M"
        tags="Sampling"
        description=" Campaña de Sampling M&M, realizada en Andorra y Baqueira. "
      />
    </div>
  );
}

function Card(props) {
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} class="card_image" />

        <h2 classname="card__title">{props.title}</h2>
        <h3 classname="card__tags">{props.tags}</h3>
        <h2 classname="card__description">{props.description}</h2>
      </div>
    </div>
  );
}

export default Body;
