import CajaRosasDiamanteRocher from '../../imagenes/PRODUCTOS/caja_rosasdiamante_ferrero.jpg'
import CajaRosasRocher from '../../imagenes/PRODUCTOS/Caj18RosFer.jpg'
import CajaRosasRosadas from '../../imagenes/PRODUCTOS/Caj25ROS_ROSADAS.jpg'
import CorazonRosasRocher from '../../imagenes/PRODUCTOS/corazon_ferrero_Rosas.jpg'
import CorazonSorpresaRosasFerrero from '../../imagenes/PRODUCTOS/Caj50RosFer.jpg'
import MiniCajaRosasPeluche from '../../imagenes/PRODUCTOS/mini_Caja_rosas_peluche.jpg'
import FloreroRosasLiliumGerberas from '../../imagenes/PRODUCTOS/florero_rosas_gerberas_lilium.jpg'
import FloreroRosasItaliano from '../../imagenes/PRODUCTOS/florero_imperial_rosas.jpg'
import FloreroRosasRosadas from '../../imagenes/PRODUCTOS/florero_rosas_rosadas.jpg'
import FloreroLisianthus from '../../imagenes/PRODUCTOS/florero_lishiantus.jpg'
import RamoRosasEuropeo from '../../imagenes/PRODUCTOS/ramo_rosas_europeo.jpg'
import ExquisitoFlorero from '../../imagenes/PRODUCTOS/exquisito_florero.jpg'
import FloreroGerberas from '../../imagenes/PRODUCTOS/florero_gerberas.jpg'
import FloreroLiliums from '../../imagenes/PRODUCTOS/Florero_lilium.jpg'
import FloreroRosasAstromelias from '../../imagenes/PRODUCTOS/florero_rosas_astromelias.jpg'
import CanastaRosasBombones from '../../imagenes/PRODUCTOS/canasta_rosas_con_bombones.jpg'
import CanastaRosas from '../../imagenes/PRODUCTOS/canasta_rosas_sin_bombones.jpg'
import CanastaFloresBlancasEstacion from '../../imagenes/PRODUCTOS/canasta_floresblancas_Estacion.jpg'
import CanastaGerberasRosas from '../../imagenes/PRODUCTOS/canasta_gerberas_rosas.jpg'
import CanastaRosasLiliums from '../../imagenes/PRODUCTOS/canasta_rosas_lilium.jpg'
import CanastaJazmines from '../../imagenes/PRODUCTOS/canasta_jazmines.jpg'
import BandejaComestible from '../../imagenes/PRODUCTOS/bandeja_te_quiero.jpg'
import Desayuno from '../../imagenes/PRODUCTOS/desayuno.jpg'




export const stockProductos = [
    {id: 1, producto: true, nombre: "Caja Rosas Diamante & Ferrero Rocher", categoria: ["Rosas", "Todos"] , opciones:[
            { tamaño: 12,
             color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
             precio: 6500}, 
    
            { tamaño: 18,
                color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                precio: 8500}, 
            
            { tamaño: 24,
             color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
             precio: 12500}, 
    
            ], tipo: "Caja",  flor: "rosas", stock: 100
            , descr: "Caja con rosas Diamante y Ferrero Rocher" , img: CajaRosasDiamanteRocher },
        
        
    {id: 2, producto: true, nombre: "Caja Rosas & Ferrero", categoria: ["Rosas", "Todos"] , opciones:[
            { tamaño: 12,
             color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
             precio: 5500}, 
    
            { tamaño: 18,
                color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                precio: 7500}, 
            
            { tamaño: 24,
             color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
             precio: 12500}, 
    
            ], tipo: "Caja", flor: "rosas",  stock: 100
            , descr: "Caja 18 rosas Ferrero" , img: CajaRosasRocher },
        
    {id: 3, producto: true, nombre: "Caja Rosas rosadas", categoria: ["Rosas", "Todos"] , opciones:[
                { tamaño: 12,
                 color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                 precio: 6500}, 
        
                { tamaño: 18,
                    color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                    precio: 11000}, 
                
                { tamaño: 25,
                 color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                 precio: 13500}, 
        
                ],  tipo: "Caja",  flor: "rosas",  stock: 100
                , descr: "Caja 25 rosas rosadas" , img: CajaRosasRosadas },
        
    {id: 4, producto: true, nombre: "Corazon de rosas y ferrero rocher", categoria: ["Rosas", "Todos"] , opciones:[
                { tamaño: 20,
                 color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                 precio: 11500}, 
        
                { tamaño: 30,
                    color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                    precio: 17250}, 
                
                { tamaño: 40,
                 color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                 precio: 23000}, 
        
        ], tipo: "arreglo floral", flor: "rosas", stock: 100
        , descr: "Corazon de rosas y ferrero rocher", img: CorazonRosasRocher},
        
    {id: 5, producto: true, nombre: "Caja de Rosas c/ Ferrero Rocher", categoria: ["Rosas", "Todos"], opciones:[
                { tamaño: 20,
                 color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                 precio: 11500}, 
        
                { tamaño: 35,
                    color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                    precio: 19500}, 
                
                { tamaño: 50,
                 color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                 precio: 28500}, 
                
        
        ], tipo: "Caja",  flor: "rosas",   stock: 100
        , descr: "Caja Sorpresa Rosas con Ferrero Rocher" , img: CorazonSorpresaRosasFerrero },
        
    {id: 6, producto: true, nombre: "Mini Caja Rosas c/ Peluche", categoria: ["Rosas", "Todos"], opciones:[
                { tamaño: 6,
                color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                precio: 4500}, 
    
                { tamaño: 12,
                    color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                    precio: 6500}, 
                
                { tamaño: 18,
                color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                precio: 18500}, 
    
        ],  tipo: "Caja",  flor: "rosas",   stock: 100
        , descr: "Mini caja rosas con peluche" , img: MiniCajaRosasPeluche },
        
    {id: 7, producto: true, nombre: "Florero con Rosas, Lilium y Gerberas", categoria: ["Rosas", "Florero", "Todos"], opciones:[
        { tamaño: "Standard",
        color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
         precio: 5500}, 
    
        { tamaño: "Premium",
        color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],    
        precio: 7500}, 
        
        { tamaño: "Deluxe",
        color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"], 
        precio: 11800}, 
    
        ], tipo: "Florero", stock: 100
        , descr: "Florero con rosas, lilium y gerberas" , img: FloreroRosasLiliumGerberas},
        
    {id: 8, producto: true, nombre: "Florero con rosas en papel italiano",categoria: ["Rosas", "Florero", "Todos"], opciones:[
                
                { tamaño: "Standard",
                 color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                 precio: 6500}, 
        
                { tamaño: "Premium",
                    color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                    precio: 8500}, 
                
                { tamaño: "Deluxe",
                 color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                 precio: 12500}, 
        
       ], tipo: "Florero", stock: 100
       , descr: "Florero con rosas en papel italiano" , img: FloreroRosasItaliano},
        
    {id: 9, producto: true, nombre: "Florero con Rosas", categoria: ["Rosas", "Florero", "Todos"], opciones: [
                { tamaño: 12,
                 color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                 precio: 6500}, 
        
                { tamaño: 18,
                    color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                    precio: 8500}, 
                
                { tamaño: 24,
                 color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                 precio: 12500}, 
        
        ],tipo: "Florero",  stock: 100
        , descr: "Florero con rosas rosadas" , img: FloreroRosasRosadas},
        
    {id: 10, producto: true, nombre: "Florero con Lisianthus", categoria: ["Florero", "Todos"], opciones:[
                { tamaño: "Standard",
                 color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                 precio: 6500}, 
        
                { tamaño: "Premium",
                    color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                    precio: 8500}, 
                
                { tamaño: "Deluxe",
                 color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                 precio: 12500}, 
            
        ] , tipo: "Florero",  stock: 100
        , descr: "Florero con lisianthus ", img: FloreroLisianthus },
        
    {id: 11, producto: true, nombre: "Ramo de Rosas Europeo", categoria: ["Rosas","Ramos", "Todos"], opciones:[
                { tamaño: 6,
                color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                precio: 6500}, 
    
                { tamaño: 12,
                    color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                    precio: 8500}, 
                
                { tamaño: 18,
                color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                precio: 12500}, 
    
        ],tipo: "Florero",  stock: 100
        , descr: "Ramo de Rosas Europeo" , img: RamoRosasEuropeo},
        
    {id: 12, producto: true, nombre: "Exquisito Florero", categoria: ["Florero", "Todos"], opciones:[
                { tamaño: "Standard",
                 color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                 precio: 6500}, 
        
                { tamaño: "Premium",
                    color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                    precio: 8500}, 
                
                { tamaño: "Deluxe",
                 color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                 precio: 12500}, 
        ], tipo: "Florero",  stock: 100
        ,  descr: "Exquisito florero" , img: ExquisitoFlorero},
        
    {id: 13, producto: true, nombre: "Florero con Gerberas", categoria: ["Florero", "Todos"], opciones:[
                { tamaño: "Standard",
                 color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                 precio: 6500}, 
        
                { tamaño: "Premium",
                    color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                    precio: 8500}, 
                
                { tamaño: "Deluxe",
                 color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                 precio: 12500}, 
    
        ], tipo: "Florero", stock: 100
        , descr: "florero con gerberas" , img: FloreroGerberas },
        
    {id: 14, producto: true, nombre: "Florero con Liliums", categoria: ["Florero", "Todos"], opciones:[
                { tamaño: 6,
                color: ["rosas","rojas","blancas"],
                precio: 6500}, 
    
                { tamaño: 12,
                    color: ["rosas","rojas","blancas"],
                    precio: 8500}, 
                
                { tamaño: 18,
                color: ["rosas","rojas","blancas"],
                precio: 12500}, 
    
        ],tipo: "Florero",  stock: 100
        , descr: "Florero con Liliums" , img: FloreroLiliums},
        
    {id: 15, producto: true, nombre: "Florero con Rosas y Astromelias", categoria: ["Rosas","Florero", "Todos"],  opciones:[
                { tamaño: "Standard",
                 color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                 precio: 6500}, 
        
                { tamaño: "Premium",
                    color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                    precio: 8500}, 
                
                { tamaño: "Deluxe",
                 color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                 precio: 12500}, 
    
        ], tipo: "Florero", stock: 100
        , descr: "Florero con rosas y astromelias" , img: FloreroRosasAstromelias},
        
    {id: 16, producto: true, nombre: "Canasta de Rosas con Bombones", categoria: ["Canasta", "Todos"], opciones:[
                { tamaño: 6,
                color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                precio: 6500}, 
    
                { tamaño: 12,
                    color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                    precio: 8500}, 
                
                { tamaño: 18,
                color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                precio: 12500}, 
    
        ], tipo: "Canasta",  stock: 100
        , descr: "Canasta de Rosas con Bombones" , img: CanastaRosasBombones},
        
    {id: 17, producto: true, nombre: "Canasta de Rosas Sin Bombones", categoria: ["Canasta", "Todos"], opciones:[
                { tamaño: 6,
                color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                precio: 5500}, 
    
                { tamaño: 12,
                    color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                    precio: 7500}, 
                
                { tamaño: 18,
                color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                precio: 11500}, 
    
        ], tipo: "Canasta", stock: 100
        , descr: "Canasta de Rosas Sin Bombones", img: CanastaRosas },
        
    {id: 18, producto: true, nombre: "Canasta con Flores Estacion", categoria: ["Canasta", "Todos"], opciones:[
                { tamaño: "Standard",
                 color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                 precio: 6500}, 
        
                { tamaño: "Premium",
                    color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                    precio: 8500}, 
                
                { tamaño: "Deluxe",
                 color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                 precio: 12500}, 
    
        ], tipo: "Canasta", stock: 100
        , descr: "Canasta con Flores de Estacion", img: CanastaFloresBlancasEstacion},
        
    {id: 19, producto: true, nombre: "Canasta de Gerberas y Rosas", categoria: ["Rosas", "Canasta", "Todos"], opciones:[
                { tamaño: "Standard",
                 color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                 precio: 6500}, 
        
                { tamaño: "Premium",
                    color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                    precio: 8500}, 
                
                { tamaño: "Deluxe",
                 color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                 precio: 12500}, 
    
        ], tipo: "Canasta",  stock: 100
        , descr: "canasta de gerberas y rosas" , img: CanastaGerberasRosas },
        
    {id: 20, producto: true, nombre: "Canasta Rosas y Lilium", categoria: ["Rosas", "Canasta", "Todos"], opciones:[
                { tamaño: 6,
                color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                precio: 6500}, 
    
                { tamaño: 12,
                    color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                    precio: 8500}, 
                
                { tamaño: 18,
                color: ["Rosas ","Rojas " ,"Amarillas " ,"Blancas"],
                precio: 12500}, 
    
        ], tipo: "Canasta",  stock: 100
        , descr: "canasta rosas y lilum" , img: CanastaRosasLiliums },
        
    {id: 21, producto: true, nombre: "Canasta de Jazmines", categoria: ["Canasta", "Todos"], opciones:[
                { tamaño: "Standard",
                
                 precio: 6500}, 
        
                { tamaño: "Premium",
                    
                    precio: 8500}, 
                
                { tamaño: "Deluxe",
                 
                 precio: 12500}, 
    
        ],tipo: "Canasta",  stock: 100
        , descr: "canasta de jazmines" ,  precio: 3000, img: CanastaJazmines },
        
    {id: 22, producto: true, nombre: "Bandeja Comestible te quiero", categoria: ["Comestible", "Todos"], opciones:[
                { tamaño: "Standard",
                 
                 precio: 6500}, 
        
                { tamaño: "Premium",
                    
                    precio: 8500}, 
                
                { tamaño: "Deluxe",
                 
                 precio: 12500}, 
    
        ], tipo: "Comestible", stock: 100
        , descr: "bandeja comestible te quiero" ,  precio: 4500, img: BandejaComestible},
        
    {id: 23, producto: true, nombre: "Desayuno", categoria: ["Desayuno", "Todos"],opciones:[
                { tamaño: "Standard",
                 
                 precio: 6500}, 
        
                { tamaño: "Premium",
                   
                    precio: 8500}, 
                
                { tamaño: "Deluxe",
                 
                 precio: 12500}, 
    
        ], tipo: "Comestible", stock: 100
        , descr: "Desayuno" ,  precio: 5000, img: Desayuno},
    ];
    
    
    