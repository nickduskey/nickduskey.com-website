<template>
  <div class="terminal" id="termina">
    <div class="inital-message">
      <p>Welcome to nickduskey.com</p>
      <p>Type "help" for help.</p>
    </div>
    <div class="active-line" id="active">
      <span class="caret"> {{ currentCaret }}</span>
      <form v-on:submit.prevent="noop">
        <input
          v-on:keyup.enter="executeCommand"
          v-model="currentCommand"
          class="terminal-input"
          id="terminal-input"
        />
      </form>
    </div>
  </div>
</template>

<script>
import commands from '../commands';

export default {
  name: 'Terminal',
  data() {
    return {
      currentCaret: '[admin@localhost ~]$ ',
      currentCommand: '',
      output: '',
      args: [],
    };
  },
  methods: {
    executeCommand() {
      this.$ga.event({
        eventCategory: 'command',
        eventAction: 'submit',
        eventLabel: this.currentCommand,
      });
      if (commands[this.currentCommand.trim()]) {
        this.output = commands[this.currentCommand.trim()].execute(this.args);
        this.consoleOutput();
      } else {
        this.outputHelp();
      }
    },
    consoleOutput() {
      let commandDiv = document.createElement('div');
      let inputCommand = document.createTextNode(
        `${this.currentCaret} ${this.currentCommand}`,
      );
      commandDiv.appendChild(inputCommand);
      let newDiv = document.createElement('div');
      let newContent = document.createTextNode(this.output);
      newDiv.appendChild(newContent);

      let br = document.createElement('br');

      let currentDiv = document.getElementById('active');
      currentDiv.insertAdjacentElement('beforebegin', commandDiv);
      currentDiv.insertAdjacentElement('beforebegin', newDiv);
      currentDiv.insertAdjacentElement('beforebegin', br);

      this.currentCommand = '';
      document.getElementById('terminal-input').focus();
    },
    outputHelp() {
      this.output = commands.help.output;
      this.consoleOutput();
    },
    noop() {
      // do nothing
    },
  },
  mounted() {
    this.$ga.page('/');
    document.getElementById('terminal-input').focus();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form {
  display: inline-block;
}
textarea:focus, input:focus{
  outline: none;
}
.terminal-input {
  color: #12d11f;
  background-color: #090f01;
  border: none;
  font-family: 'VT323', monospace;
  font-size: 1em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
