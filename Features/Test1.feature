Feature: Test task

Scenario Outline: Task to add a post
Given I launch the "<url>"
When enter "<text>" under todo
When perform submit
When todo task with "<text>" should  be added successfully
Examples:
|url                                  |text        | 
|https://todomvc.com/examples/react/  |TaskActive  |
|https://todomvc.com/examples/react/  |TaskCompleted |


Scenario Outline: Task to delete a post
Given I launch the "<url>"
When enter "<text>" under todo
When perform submit
When user delete "<text>" it should be deleted
Examples:
|url                                  |text         | 
|https://todomvc.com/examples/react/  |Taskdelete   |


Scenario Outline:  Verify Get calls for API Allpost , Firstpost, postwithid1 
Given I launch the "<url>"
When mark "TaskCompleted" as complete
When click on active tab "TaskActive" should be displayed
When click on completed tab "TaskCompleted" should be displayed
Examples:
|url                                  |
|https://todomvc.com/examples/react/  |


Scenario Outline: Verify Get calls for API
Given verify "<Call>" call to "<Type>" posts
Given verify "<Call>" call to "<Type>" posts
Given verify "<Call>" call to "<Type>" posts

Examples:
|Call |Type     |
|GET  |Allpost  |
|GET  |Firstpost|
|GET  |withid1  |

