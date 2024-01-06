import { rest } from "msw"
import "@testing-library/jest-dom/extend-expect"
import { setupServer } from "msw/node"
import {
  waitFor,
  waitForElementToBeRemoved,
  screen,
} from "@testing-library/react"
import { render } from "../../utils/test"
import Freelances from "./Freelances.jsx"
import { ThemeProvider } from "../../utils/context/ContextProvider.jsx"

const freelancersMockedData = [
  {
    name: "Harry Potter",
    job: "Magicien frontend",
    picture: "",
  },
  {
    name: "Hermione Granger",
    job: "Magicienne fullstack",
    picture: "",
  },
]

const server = setupServer(
  rest.get("http://localhost:8000/freelances", (req, res, ctx) => {
    return res(ctx.json({ freelancersList: freelancersMockedData }))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test("Should render without crash", async () => {
  render(
    <ThemeProvider>
      <Freelances />
    </ThemeProvider>,
  )
  expect(screen.getByTestId("loader")).toBeTruthy()
  await waitFor(() => {
    expect(screen.getByText("Harry Potter")).toBeTruthy()
    expect(screen.getByText("Hermione Granger")).toBeTruthy()
  })
})

// it("Should display freelancers names after loader is removed", async () => {
//   render(<Freelances />)

//   await waitForElementToBeRemoved(() => screen.getByTestId("loader"))
//   expect(screen.getByText("Harry Potter")).toBeInTheDocument()
//   expect(screen.getByText("Hermione Granger")).toBeInTheDocument()
//   expect(screen.queryByTestId("loader")).not.toBeInTheDocument()
// })
