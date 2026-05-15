<template>
    <div>
        <h1>{{ restaurante.nome }}</h1>

        <h2>Reviews</h2>

        <div v-for="review in reviews" :key="review._id">
            <p>{{ review.comentario }}</p>
            <p>Nota: {{ review.nota }}</p>
            <hr />
        </div>

    </div>
</template>

<script>
import restauranteService from '@/service/restauranteService';
import reviewService from '@/service/reviewService';

export default {

    name: 'ListarReview',

    data() {
    return {
        restaurante: {},
        reviews: []
    }
},

async mounted() {
    const id = this.$route.params.id;

    try {
        const responseRestaurante = await restauranteService.buscar(id);
        this.restaurante = responseRestaurante.data;

        const responseReviews = await reviewService.buscarRestaurante(id);
        this.reviews = responseReviews.data;

    } catch (error) {
        console.log(error);
    }
}
}

</script>