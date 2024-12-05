import AboutImage from './assets/img/about-image.png';
import PopularImage from './assets/img/popular.png';
import IngredientImage from './assets/img/ingredient.png';


const section = `
    <section id="popular" class="popular-section">
        <div class="popular-content flow">
            <h2 class="popular-title text-xl text-center">Discover<br>Popular Orders</h2>
            <p class="popular-description text-center">
                Select the best preprared and delicious flavours. We have collected some of the most popular recipes from around the world for you to choose your favorite.
            </p>
            <div class="popular-recipes-image flex">
                <div>
                    <img src="${PopularImage}" alt="Margheritta">
                </div>
                <div>
                    <img src="${PopularImage}" alt="Margheritta">
                </div>
                <div>
                    <img src="${PopularImage}" alt="Margheritta">
                </div>
            </div>
        </div>
    </section>

    <section class="fresh-section">
        <div class="fresh-content flow">
            <h2 class="fresh-title text-xl text-center">Fresh and natural ingredients</h2>
            <div class="grid">
                <ul class="flow">
                    <li class="ingredients">
                        <img src="${IngredientImage}" alt="">
                        <div>
                            <h3 class="title text-lg">Flour</h3>
                            <p>
                                The best wheat from the field for the best flour
                            </p>
                        </div>
                    </li>
                    
                    <li class="ingredients">
                        <img src="${IngredientImage}" alt="">
                        <div>
                            <h3 class="title text-lg">Cheese</h3>
                            <p>
                                Indulge in cheese for a healthy future
                            </p>
                        </div>
                    </li>

                    <li class="ingredients">
                        <img src="${IngredientImage}" alt="">
                        <div>
                            <h3 class="title text-lg">Sauce</h3>
                            <p>
                                Add a touch of salsa to your life and it will taste better
                            </p>
                        </div>
                    </li>

                    <li class="ingredients">
                        <img src="${IngredientImage}" alt="">
                        <div>
                            <h3 class="title text-lg">Vegetables</h3>
                            <p>
                                Vegetables full of essence of nature and organic
                            </p>
                        </div>
                    </li>

                    <li class="ingredients">
                        <img src="${IngredientImage}" alt="">
                        <div>
                            <h3 class="title text-lg">Meats</h3>
                            <p>
                                The best fresh meats for your health
                            </p>
                        </div>
                    </li>
                </ul>
                <div class="fresh-img">
                    <img src="${AboutImage}" alt="Pizza Image">
                </div>
            </div>
        </div>
    </section>
`;

export { section };