<template>
  <div class="list">
    <h1 class="title">Список обращений</h1>
    <div class="" v-if="tickets">
      <div class="" v-for="(ticket, idx) of tickets"
      :key="ticket.id"
      >
      <router-link class="item" :to="'/ticket/' + ticket.id">

        <div class="number">{{ `#${idx + 1}` }}</div>
        <div class="space"><img class="photo" v-bind:src='ticket.avatar' alt=""></div>
        <div class="name space">{{ ticket.name || 'Нет имени' }}</div>
        <div class="subject_call space">
          <div class="subject">
            <p>Тип обращения:</p>
            <p class="subject_text">{{ ticket.subject || "&#128580;" }}</p>
          </div>
          <div class="subject_body">{{ ticket.body_subject || "нет обращения" }}</div>
        </div>
        <div class="circle space" v-bind:class="{'new_status': ticket.status === 'Новый',
          'processing_status': ticket.status === 'В обработке',
           'postponed_status': ticket.status === 'Отложено',
           'closed_status': ticket.status === 'Закрыто'}"></div>
        <div class="status ">{{ ticket.status }}</div>
        <div class="priority space">{{ ticket.priority }}</div>
        <div class="date space">{{ new Date(ticket.date).toLocaleString('de-DE').slice(0,15) }}</div>
        </router-link>
      </div>
      <Paginate
          :page-count="pageCount"
          :click-handler="pageChangeHandler"
          :prev-text="'Назад'"
          :next-text="'Вперед'"
          :container-class="'pagination'"
          :page-class="'wives-effect'">
      </Paginate>
    </div>

    <p class="empty" v-else>Пока обращений нет</p>
  </div>
</template>

<script>
import paginationMixin from '@/mixins/pagination.mixin.js'
export default {
  name: 'list',
  mixins: [paginationMixin],

  async mounted(){
    const tickets = await this.$store.getters.tickets;
    this.setupPagination(tickets.map(ticket => {
      return ticket
    }))
  },
}
</script>

<style lang="scss" scoped>
p{
  margin: 0;
  padding: 0;
}
h1{
  font-size: 40px;
}
h1, .item{
  color: rgb(185, 181, 181);
  overflow: hidden;
}

.item{
  display: flex;
  align-items: center;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  padding: 8px 10px;
  margin-bottom: 5px;
}
.item:hover {
  background-color: rgb(246, 248, 245);
  opacity: 1;
  transition: 1s linear;
}
.space{
   margin-left: 25px;
 }
 .number{
  text-align: center;
  max-width: 40%;
  background: #f67a6e;
  color: #fff;
  border-radius: 2px;
  padding: 0 10px;
}
.photo{
  width: 50px;
  border-radius: 8px;
  text-overflow: ellipsis;
}
.name{
  min-width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.subject_call{
  background: rgb(245, 241, 241);
  padding: 5px 10px;
  min-width: 350px;
  border-left: 3px solid;
  border-radius: 4px;
  overflow: hidden;
}
.subject{
  display: flex;
  align-items: center;
  font-size: 12px;
}
.subject_text{
  color: rgb(123, 133, 238);
  margin-left: 10px;
}
.date{
  white-space: nowrap;
}
.circle{
  width: 10px; 
  height: 10px;
  background: #83A7C9;
  border-radius: 50%;
}
.new_status{
  background: #a9d86e;
}

.processing_status{
  background: #ff6c60;
}

.postponed_status{
  background: #fcb322;
}

.closed_status{
  background: #bec3c7;
}

.priority, .status{
  width: 100px;
}

.status{
  margin-left: 7px;
}

.subject_body{
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 300px;
}

.empty{
  color: rgb(113, 181, 190);
  font-size: 18px;
}

@media screen and (max-width: 1470px) {
  .name{
    min-width: 100px;
  }
  .subject_call{
    min-width: 250px;
  }
  .subject_body{
    display: none;
  }
}

@media screen and (max-width: 1310px) {
  .space{
    margin-left: 10px;
  } 
}
@media screen and (max-width: 1148px) {
  .subject_call{
    min-width: 200px;
  }
  .item{
    font-size: 13px;
    .item{
      font-size: 11px;
      justify-content: space-between;
    }
  }
  .date{
    display: none;
  }
}

@media screen and (max-width: 770px) {
  .title{
    font-size: 20px;
    margin-top: 10px;
  }
  .item{
    font-size: 11px;
  }
  .name{
    min-width: 60px;
  }
  .photo{
    width: 30px;
  }
  .status{
    display: none;
  }
  .priority {
    width: auto;
  }
}

@media screen and (max-width: 514px){
  .item{
    font-size: 9px;
    padding: 5px 5px;
  }
  .name{
    width: auto;
  }
  .space{
    margin-left: 5px;
  }
  .subject_call{
    display: none;
    min-width: auto;
  }
  .subject{
    flex-direction: column;
    min-width: 150px;
  }
  .status{
    display: block;
  }
  .circle{
    width: 8px; 
    height: 8px;
  }
}
</style>
