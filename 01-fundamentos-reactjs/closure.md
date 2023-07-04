# Closures no React

Para compreender melhor por que o setLikes(likes + 1) não funciona


```js
  function Comment() {
    const [likes, setLikes] = useState(0)

    function addLikes() {
      setLikes(likes + 1)
      setLikes(likes + 1)

   }
  }

  Comment()


```
Quando chamamos essa função setLikes passando likes + 1, para o react por baixo dos panos, é a mesma coisa que chamar a função Comment() com um novo valor para o estado um novo valor para o estado, ou seja, o react vai pensar 
"opa, a pessoa chamou o setLikes, likes + 1, antes era 0 agora é 1", será passado algo, como hipoteticamente Comment(props, 0), sendo 0 a quantidade de likes.

Quando executamos o setLikes pela primeira vez, o react irá criar um novo contexto separado onde ele cria uma nova versão do componente com o likes sendo 1, que é o valor que foi incrementado nesse caso, porém no contexto anterior o like continua sendo 0, então se a função for executada logo em seguida, ela será chamada no contexto anterior, que tinha o valor de 0 

