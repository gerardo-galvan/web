import {  Text, Page } from '@vercel/examples-ui'
import { Chat } from '../components/Chat'

function Home() {
  return (
    <Page className="flex flex-col gap-12">
      <section className="flex flex-col gap-3">
      <Text variant="h2">INNERTEL</Text> 
        <div>
          <Chat />
        </div>
      </section>
    </Page>
  )
}
 

export default Home
