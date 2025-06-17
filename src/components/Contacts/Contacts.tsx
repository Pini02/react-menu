import { UpperBar } from "../UpperBar/UpperBar"
import { LowerBar } from "../LowerBar/LowerBar"
import { Box } from "@mui/material"
export function Contacts(){
    return (
        <div>
            <UpperBar />
            <Box sx={{width:"100%"}}>
            <Box sx={{display:"flex", justifyContent:"space-between",columnGap:"120px"}}>
                <Box sx={{display:"flex", alignItems:"center", alignContent:"center",justifyContent:"normal"}}>
                    <p style={{display:"flex"}}>Ci trovate in <a style={{display:"flex"}}href="https://maps.app.goo.gl/bPf2ymuWhq2xP4Km7">via Roma 2, 12345 (Roma)</a></p>  
                    
                </Box>
                <Box sx={{display:"flex", flexDirection:"column",flex:1}}>
                    <h2>Contatti:</h2>
                    <Box sx={{display:"flex", alignContent:"center", alignItems:"center", justifyContent:"normal"}}>
                        <p style={{display:"flex", flexDirection:"row"}}>Prenotazioni: </p>
                        <a href={`tel:${1234567890}`} style={{display:"flex", flexDirection:"row"}}>1234567890</a>
                    </Box>
                </Box>

                <Box sx={{display:"flex", flexDirection:"column",flex:1}}>
                    <p>Orari:<br/></p>
                    <p>Lunedì : ...<br/></p>
                    <p>Martedì<br/></p>
                    <p>Mercoledì:<br/></p>
                    <p>Giovedì: <br/></p>
                    <p>Venerdì<br/></p>
                    <p>Sabato: CHIUSO<br/></p>
                    <p>Domenica: CHIUSO<br/></p>
                </Box>
            </Box>
            </Box>
            <LowerBar />
        </div>
    )
}