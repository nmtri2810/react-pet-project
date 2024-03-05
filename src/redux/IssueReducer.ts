import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IssueInitialState {
  projectIssues: string[]
}

const initialState: IssueInitialState = {
  projectIssues: []
}

// Define the reducer with name, initial value and all reducers have actions
export const issueSlice = createSlice({
  name: 'issue',
  initialState,
  reducers: {
    addIssue: (state, action: PayloadAction<string>) => {
      state.projectIssues = [...state.projectIssues, action.payload]
    }
  }
})

// This is action exported to send actions from components to store
export const { addIssue } = issueSlice.actions

export default issueSlice.reducer // = IssueReducer
