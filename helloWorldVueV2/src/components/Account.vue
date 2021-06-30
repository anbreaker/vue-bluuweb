<template>
  <h2>Type Account: {{ account }}</h2>
  <h2>Balance - {{ balance }}</h2>
  <h2>Account {{ status ? 'On' : 'Off' }}</h2>

  <div v-for="(service, index) in services" :key="index">
    {{ index + 1 }} - {{ service }}
  </div>

  <BalanceAction text="Add Credit" @clickButton="addCredit" />

  <BalanceAction
    text="Reduce Credit"
    @clickButton="reduceCredit"
    :disableButton="disableButton"
  />
</template>

<script>
import BalanceAction from './BalanceAction';

export default {
  components: {
    BalanceAction,
  },

  data() {
    return {
      balance: 400,
      account: 'Visa',
      status: true,
      services: ['transfers', 'payments', 'drafts'],
      disableButton: false,
    };
  },

  methods: {
    addCredit() {
      this.balance = this.balance + 100;
      this.disableButton = false;
    },

    reduceCredit() {
      if (this.balance === 0) {
        this.disableButton = true;
        alert('Without Credit!!');
        return;
      }
      this.balance = this.balance - 100;
    },
  },
};
</script>

<style scoped></style>
