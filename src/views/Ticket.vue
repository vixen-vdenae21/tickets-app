<template>
    <div class="list" v-if="ticket">
      <router-link tag="div" class="back-link" :to="'/list/'">к списку</router-link>
      <div class="item-info">
        <div><img class="item-info_photo" v-bind:src='ticket.avatar' alt="photo"></div> 
        <div class="">
          <div class="item-info_name space">{{ ticket.name || 'нет имени' }}</div>
          <div class="item-info_status space">{{ `почта: ${ticket.email || 'нет почты'}` }}</div>
          <div class="item-info_status space">{{ `статус: ${ ticket.status }.` }}</div>
          <div class="item-info_status space">{{ `приоритет: ${ ticket.priority }.` }}</div>
        </div>
      </div>
      <div class="date">{{ `время обращения: ${new Date(ticket.date).toLocaleString('de-DE').slice(0,15)}` }}</div>
      <p class="subject_text">{{ `тип обращения: ${ticket.subject}` }}</p>
      <div class="subject_body">{{ `текст обращения: ${ticket.body_subject || "нет обращения"}` }}</div>
      
      <button class="btn" type="button" v-if="ticket.status == 'Закрыто'"  @click="openTicket">Открыть</button>
      <button class="btn pink accent-3" type="button" v-else @click="closeTicket">Закрыть заявку</button>

    </div>
    <div class="not_found" v-else>Не найдено</div>
</template>
<script>
export default {
  name: 'ticket',
  computed: {
    ticket() {
      return this.$store.getters.ticketById(+this.$route.params.id);
    },
  },
  methods: {
    closeTicket() {
      this.$store.dispatch('closeTicket', this.ticket.id);
      this.$router.push('/list/');
    },
    openTicket() {
      this.$store.dispatch('openTicket', this.ticket.id);
      this.$router.push('/list/');
    }
  },
}
</script>

<style lang="scss" scoped>
  .space{
    margin-left: 10px;
  }

  .back-link{
    margin-top: 20px;
    color: #81b7e9;
    cursor: pointer;
  }

  .item-info{
    display: flex;
  }
  .item-info_photo{
    width: 150px;
    border-radius: 8px;
    text-overflow: ellipsis;
  }

  .item-info_name{
    font-weight: bold;
    font-size: 18px;
    color: rgb(86, 88, 88);
  }

  .not_found{
    color: rgb(51, 203, 223);
    font-size: 18px;
    margin-top: 50px;
  }

  .btn{
    margin-top: 20px;
  }

  @media screen and (max-width: 770px) {
    .back-link{
      display: none;
    }
    .list{
      padding: 15px;
    }
    .item-info{
      flex-direction: column;
    }
    .space{
      margin-left: 0;
    }
  }
</style>
