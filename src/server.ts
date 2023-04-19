import express from 'express'

const app = express();
const teamss = []
interface Jogador{
    id: string;
	team_id: string | null;
	name: string;
	age: number;
	position: "Goalkeeper" | "Defender" | "Midfielder" | "Forward";
	goals: number;
}

interface Teams{
    id: number;
	name: string;
	coach: string;
	stadium: string;
	city: string;
}


app.post('/player/:team_id', (req, res) => {
    const { team_id } = req.params
    const { id, name, age, position, goals } = req.body;

    const jogador: Jogador = {
        id,
        team_id,
        name, 
        age, 
        position, 
        goals
    }

    return res.send().status(201)
})


app.post('/team', (req, res) =>{
    const { id, name, coach, stadium, city } = req.body
    
    const team: Teams ={
    id: 1, 
	name,
	coach,
	stadium,
	city
        
    }

    return res.send().status(201)
})

app.get('/teams/:id', (req, res) => {

const { id } = req.params

})

app.listen(3335)
