<template>
  <div class="create">
    <h2>Новый тикет</h2>
      <div class="row">
        <div class="input-field col s12">
          <input v-model="ticket.name" type="text" id="name" class="validate">
          <label for="name">Имя</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input v-model="ticket.email" type="text" id="email" class="validate">
          <label for="email">Email</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <textarea v-model="ticket.body_subject" id="textarea2" class="materialize-textarea" data-length="120"></textarea>
          <label for="textarea2">Сообщение</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <select ref="formSelectSubject" v-model="ticket.subject">
            <option value="" disabled selected>{{ ticket.subject }}</option>
            <option v-for="(select, index) in selectSubject"
              :key="index"
            >{{select}}</option>
          </select>
          <label>Тип обращения</label>
        </div>
        <div class="input-field col s6">
          <select ref="formSelectPriority" v-model="ticket.priority">
            <option value="" disabled selected>{{ ticket.priority }}</option>
            <option v-for="(select, index) in selectPriority"
              :key="index"
            >{{select}}</option>
          </select>
          <label>Приоритет</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <select ref="formSelectStatus" v-model="ticket.status">
            <option value="" disabled selected>{{ ticket.status }}</option>
            <option v-for="(select, index) in selectStatus"
              :key="index"
            >{{select}}</option>
          </select>
          <label>Статус</label>
        </div>
      </div>
      <button class="waves-effect waves-light btn" @click="submitHandler">Создать</button>
      <button class="waves-effect red lighten-1 btn" @click="resetHandler">Отмена</button>    
  </div>
</template>

<script>

export default {
  name: 'create',
  data: () => ({
    ticket: {
      name: '',
      email: '',
      avatar: '',
      body_subject: '',
      subject: 'Жалоба на пользователя',
      priority: 'Средний',
      status: 'Новый',
    },

    selectSubject: ['Жалоба на приложение', 
                    'Жалоба на сайт',
                    'Оплата',
                    'Функционал',
                    'Авторизация',
                    'Модерация',
                    'Другое'],
    selectPriority: [ 'Низкий',
                      'Средний',
                      'Высокий',
                      'Критический'],
    selectStatus: [ 'В обработке',
                    'Отложено',
                    'Закрыто']
  }),
  mounted (){
   M.FormSelect.init(this.$refs.formSelectSubject, {});
   M.FormSelect.init(this.$refs.formSelectPriority, {});
   M.FormSelect.init(this.$refs.formSelectStatus, {});
  },
  methods: {
    submitHandler(){
      const ticket = {
        id: Date.now(),
        name: this.ticket.name,
        email: this.ticket.email,
        avatar: 'https://lh3.googleusercontent.com/ogw/ADGmqu9mwjd_DnKM_J5VCm0fPeUuIA1p-MU6rR7Fi0wV=s192-c-mo',
        body_subject: this.ticket.body_subject,
        subject: this.ticket.subject,
        priority: this.ticket.priority,
        status: this.ticket.status,
        date: new Date()
      }
      this.$store.dispatch('createTicket', ticket);
      this.$router.push('/list')
    },
    resetHandler(){
      this.ticket.name = '',
      this.ticket.email = '',
      this.ticket.body_subject = '',
      this.ticket.subject = '',
      console.log("this.ticket.priority", this.ticket.priority);
    }
  }
}
</script>

<style lang="scss" scoped>
  h2{
    margin: 0;
    color: rgb(182, 179, 179);
    font-size: 40px;
  }

  button{
    margin-left: 10px;
  }

  .create{
    border-radius: 5px;
    border: 2px solid #34d4cc;
    margin-top: 30px;
    padding: 20px;
  }  
</style>
