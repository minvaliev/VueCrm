<template>
    <div class="col s12 m6 l8">
        <div class="card orange darken-3 bill-card">
            <div class="card-content white-text">
                <div class="card-header">
                    <span class="card-title">Курс валют</span>
                </div>
                <table>
                    <thead>
                    <tr>
                        <th>Валюта</th>
                        <th>Курс</th>
                        <th>Дата</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr v-for="cur in currencies" :key="cur">
                        <td>{{cur}}</td>
                        <td>{{rates[cur].toFixed(4)}}</td>
                        <td>{{dateFilter('date')}}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeCurrency",

        props: ['rates', 'date'],

        data: () => ({
            currencies: ['RUB', 'USD', 'EUR']
        }),

        methods: {
            dateFilter(value, format = 'date') {
                value = this.date
                const options= {}
                if (format.includes('date')) {
                    options.day = '2-digit'
                    options.month = 'long'
                    options.year = 'numeric'
                }
                return new Intl.DateTimeFormat('ru-RU', options).format(new Date(value))
            },
        }
    }
</script>

<style scoped>

</style>