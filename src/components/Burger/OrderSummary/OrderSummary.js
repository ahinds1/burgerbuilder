import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(ingKey => {
    return (
      <li key={ingKey}>
        <span>
          <span style={{ textTransform: 'capitalize' }}>{ingKey}</span>{' '}
        </span>
        ({props.ingredients[ingKey]})
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <strong>
        <p>Total Price: ${props.price.toFixed(2)}</p>
      </strong>
      <p>Checkout?</p>
      <Button clicked={props.purchaseCanceled} btnType="Danger">
        Cancel
      </Button>
      <Button clicked={props.purchaseContinued} btnType="Success">
        Continue
      </Button>
    </Aux>
  );
};

export default orderSummary;
