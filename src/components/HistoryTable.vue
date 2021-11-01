<template>
    <table>
        <thead>
        <tr>
            <th>#</th>
            <th>Сумма</th>
            <th>Дата</th>
            <th>Категория</th>
            <th>Тип</th>
            <th>Открыть</th>
        </tr>
        </thead>

        <tbody>
        <tr v-for="(record, idx) of records" :key="record.id">
            <td>{{idx + 1}}</td>
            <td>{{record.amount | currency('RUB')}}</td>
            <td>{{dateFilter(record.date, 'date')}}</td>
            <td>{{record.categoryName}}</td>
            <td>
                <span
                    :class="[record.typeClass]"
                    class="white-text badge red"
                    >{{record.typeText}}</span>
            </td>
            <td>
                <button
                   v-tooltip="'Открыть запись'"
                    class="btn-small btn"
                    @click="$router.push('/detail-record/' + record.id)"
                >
                    <i class="material-icons">open_in_new</i>
                </button>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: "HistoryTable",
        props: {
            records: {
                required: true,
                type: Array
            }
        },
        methods: {
            dateFilter(value, format = 'date') {
                value = value
                const options= {}
                if (format.includes('date')) {
                    options.day = '2-digit'
                    options.month = 'long'
                    options.year = 'numeric'
                    options.hour = '2-digit'
                    options.minute = '2-digit'
                    options.second = '2-digit'
                }
                return new Intl.DateTimeFormat('ru-RU', options).format(new Date(value))
            },
        }
    }
</script>

<style scoped>

</style>