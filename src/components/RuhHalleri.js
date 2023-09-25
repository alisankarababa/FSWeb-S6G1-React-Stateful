/*
RuhHalleri Talimatları

Aşağıdaki kısa videoyu izleyin:
https://www.ergineer.com/assets/materials/a664dfe7-ruhhalleri.gif

Bu Sayacı oluşturmak için kaç adet state dilimine ihtiyacınız var? Başlamadan önce biraz üzerine düşünün!

Bazıları 3 adet olduğunu söyleyecektir: her ruh hali için bir (mutlu, üzgün, ve bilinmeyen).
Fakat tek bir state dilimi bu durumları saklamak için yeterlidir!

ADIM 0:
  Aşağıdaki bileşeni inceleyin ve state hook'u import edin.

ADIM 1:
  State hook'u kullanarak bir 'ruhHali' ve 'setRuhHali' oluşturun.
  'ruhHali' state dilimi verilen 3 ruh halinden birisiyle yüklenecek.
  Bu değişkenler zaten tanımlandı, bu uzun cümleleri bileşen içine tekrar yazmanıza gerek yok.

ADIM 2:
  Eğer state mutluysa rengi royalblue yapın, diğer durumlar için crimson yapın.

ADIM 3:
  JSX içinde sabit yazılmış ruh halini silip `ruhHali` state dilimine göre kıvrımlı parantezler içerisinde ekleyin.

ADIM 4, 5, 6:
  Click handler içinde `setRuhHali` ni kulanarak aşağıda tanımlanmış değişkenleri kullanarak ruhHali'ni güncelleyin
*/

import React, { useState } from 'react'; /* ADIM 0 */

const ilkRuhHali = 'Nasıl hissettiğimi bilmiyorum :-|';
const mutluRuhHali = 'Oldukça mutlu :)';
const uzgunRuhHali = 'Oldukça üzgün :(';

export default function RuhHalleri() {
  /* ADIM 1 */

    const [mood, setMood] = useState(ilkRuhHali);
//  const [styleColor, setStyleColor] = useState(mood === mutluRuhHali ? "royalblue" : "crimson");
    const [styleColor, setStyleColor] = useState("crimson");



  const stil = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: styleColor, /* ADIM 2 */
  };
	
  const mutluEt = () => {
    /* ADIM 4 */
    setMood(mutluRuhHali);
    setStyleColor("royalblue");
    // setStyleColor(mood === mutluRuhHali ? "royalblue" : "crimson");
  };
  const uZ = () => {
    /* ADIM 5 */
    setMood(uzgunRuhHali);
    setStyleColor("crimson");   

    // setStyleColor(mood === mutluRuhHali ? "royalblue" : "crimson");
  };
  const reset = () => {
    /* ADIM 6 */
    setMood(ilkRuhHali);
    setStyleColor("crimson");

    // setStyleColor(styleColor = (mood === mutluRuhHali ? "royalblue" : "crimson"));
  };

  

  return (
    <div className='widget-moods container'>
      <h2>RuhHalleri</h2>
	<div id='ruhHali' style={stil}>{mood}</div> {/* ADIM 3 */}
      <div>
        <button id='mutluEt' onClick={mutluEt}>Mutlu Et</button>
        <button id='uz' onClick={uZ}>Üz</button>
        <button id='resetRuhHali' onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
