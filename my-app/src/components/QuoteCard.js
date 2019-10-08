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
  <cite>{props.character}</cite>
</figcaption>
</figure>
);
}

export default QuoteCard;