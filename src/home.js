import HeroImage from './assets/img/hero-image.png';

const section = `
    <section class="hero-section grid">
        <div class="hero-content flow">
            <h2 class="hero-title text-xl">Crispy And Delicious Pizzas</h2>
            <p class="hero-description">
                Order the best pizzas to end your hunger and make your family moments more memorable, place your order now
            </p>
            <button class="button">Order Pizza Now</button>
        </div>

        <div class="hero-img">
            <img src="${HeroImage}" alt="Pizza Image">
        </div>
    </section>
`;

export { section };