  import { Route, Switch } from "wouter";                                                                                
   import Index from "./pages/index";
   import ResultsPage from "./pages/results";
   import ResultDetail from "./pages/result-detail";                                                                                     
   import { Provider } from "./components/provider";                                                                      
   import { AgentFeedback } from "@runablehq/website-runtime";                                                                            
                                                                                                                          
   function App() {                                                                                                       
     return (                                                                                                             
       <Provider>                                                                                                         
         <Switch>                                                                                                         
           <Route path="/" component={Index} />
           <Route path="/results" component={ResultsPage} />
           <Route path="/results/:id" component={ResultDetail} />                                                                           
         </Switch>                                                                                                        
         {/* Do not remove — off by default, activated by parent iframe via postMessage */}                                                  
         {import.meta.env.DEV && <AgentFeedback />}                                                                       
                                                                        
       </Provider>                                                                                                        
     );                                                                                                                   
   }                                                                                                                      
                                                                                                                          
   export default App; 