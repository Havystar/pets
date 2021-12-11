import React from 'react';


export function AddItem() {
  return (
    <div className="addItem">
      <button>Anuluj</button>
      <header>
        <h3>Dodaj Przedmiot</h3>
      </header>
      <form>

        <div class="select-wrap">
          <label>Tytuł</label>
          <input type="text" ></input>
        </div>
        <div class="select-wrap">
          <label>Opis</label>
          <textarea rows="5" maxLength="250"></textarea>
        </div>
        <div class="select-wrap">
          <label>Kategoria</label>
          <select>
            <option className='dnone' value="" disabled selected></option>
            <option value="Akcesoria">Akcesoria</option>
            <option value="Jedzenie">Jedzenie</option>
            <option value="Leki">Leki</option>
            <option value="Koce">Koce</option>
            <option value="Odziez">Odzież</option>
            <option value="Higiena">Higiena</option>
          </select>
        </div>
        <div class="select-wrap">
          <label>Rozmiar</label>
          <select name="Rozmiar">
            <option className='dnone' value="" disabled selected></option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>
        <div class="select-wrap">
          <label>Marka</label>
          <input name="marka" ></input>

        </div>
        <div class="select-wrap">
          <label>Dla Kogo</label>
          <select name="DlaKogo">
            <option className='dnone' value="" disabled selected ></option>
            <option value="Psy">Psy</option>
            <option value="Koty">Koty</option>
            <option value="Ptaki">Ptaki</option>
            <option value="Gady">Gady</option>
            <option value="Węże">Węże</option>
            <option value="Pająki">Pająki</option>
            <option value="Inne">Inne</option>
          </select>
        </div>
        <div class="select-wrap">
          <label> ilość</label>
          <input type="number"></input>
        </div>
        <div class="select-wrap">
          <label> Data ważności</label>
          <input type="date"></input>
        </div>
        <input type="submit" value="Dodaj"></input>
      </form>
    </div>
  );
}