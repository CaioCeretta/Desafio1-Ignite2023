import { Play } from 'phosphor-react'
import {
  CountDownContainer,
  FormButton,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  TaskInput,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form>
        <FormContainer>
          <label htmlFor="task">I will Work On</label>
          <TaskInput
            placeholder="Name your project"
            list="task-suggestions"
            id="task"
            type="text"
          />

          <datalist id="task-suggestions">
            <option value="Ignite" /> React Ignite
            <option value="Angular" /> Angular Course
            <option value="Vue" /> Vue Course
          </datalist>

          <label htmlFor="minutes-amount">for</label>
          <MinutesAmountInput
            placeholder="00"
            id="minutes-amount"
            step={5}
            min={5}
            max={60}
            type="number"
          />

          <span>minutes</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <FormButton type="submit">
          <Play size={24} />
          Start
        </FormButton>
      </form>
    </HomeContainer>
  )
}
