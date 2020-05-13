import React from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { useDispatch, useSelector } from 'react-redux';
import { study, takeNap, eatSnack, drinkCoffee } from '../actions/moodyActions';
import { getFace } from '../selectors/moodySelector';

const Moods = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const face = getFace(state);

  return (
    <>
      <Controls>
        <button onClick={() => dispatch({ type: 'DRINK_COFFEE' })}>coffee - {drinkCoffee}</button>
        <button onClick={() => dispatch({ type: 'EAT_SNACK' })}>snacks - {eatSnack}</button>
        <button onClick={() => dispatch({ type: 'TAKE_NAP' })}>naps - {takeNap}</button>
        <button onClick={() => dispatch({ type: 'STUDY' })}>study - {study}</button>
      </Controls>
      <Face emoji={face} />
    </>
  );
};
export default Moods;
