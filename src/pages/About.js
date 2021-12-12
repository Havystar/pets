import React, { useState } from 'react';
import { Burger } from '../components/Burger';
import { Menu } from '../components/Menu';
import { useBurgerToggle } from '../hooks/useHooks';

export function About() {
  const { open, setOpen } = useBurgerToggle()
  return (
    <div className="App">
      <Menu open={open}></Menu>
      <Burger open={open} setOpen={setOpen}></Burger>
      <p>TAK</p>
    </div>
  );
}