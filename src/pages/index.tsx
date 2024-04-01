import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home";

import shirt1 from '../assets/shirt01.png';
import shirt2 from '../assets/shirt02.png';
import shirt3 from '../assets/shirt03.png';
import shirt4 from '../assets/shirt04.png';
import shirt5 from '../assets/shirt05.png';

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={shirt1} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta 01</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image src={shirt2} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta 02</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
