import React from 'react';
import './QuoteCard.css';

function QuoteCard (props) {
    return (
<figure class="QuoteCard">
<img
  src={props.image}
  alt="Nelson Muntz" />
<figcaption>
  <blockquote>
   {props.quote}
  </blockquote>
  <p>
  <cite>{props.character}</cite>
  <span>&#9733;</span>
</p>
</figcaption>
</figure>
);
}



export default QuoteCard;