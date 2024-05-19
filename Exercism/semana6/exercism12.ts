function isYelling(message: string): boolean {
    return message === message.toUpperCase() && /[A-Z]/.test(message);
  }
  
  function isQuestion(message: string): boolean {
    return message.trim().endsWith('?');
  }
  
  function isSilence(message: string): boolean {
    return message.trim().length === 0;
  }
  
  export function hey(message: string): string {
    if (isSilence(message)) {
      return 'Fine. Be that way!';
    }
  
    if (isYelling(message) && isQuestion(message)) {
      return "Calm down, I know what I'm doing!";
    }
  
    if (isYelling(message)) {
      return 'Whoa, chill out!';
    }
  
    if (isQuestion(message)) {
      return 'Sure.';
    }
  
    return 'Whatever.';
  }
  