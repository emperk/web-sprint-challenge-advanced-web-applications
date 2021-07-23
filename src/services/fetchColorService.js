import axiosWithAuth from "../helpers/axiosWithAuth";


export const fetchColorService = (setColors, setError) =>
axiosWithAuth().get(`http://localhost:5000/api/colors`)
    .then(res => {
      setColors(res.data)
    })
    .catch(err => {
      setError('colors not set')
    })


export const editColorService = (editColor, colors, setColors, setError) => {
  axiosWithAuth().put(`http://localhost:5000/api/colors/${editColor.id}`, editColor)
      .then(res => {
        const filteredColors = colors.filter(color => color.id !== res.data.id)
        console.log('res.data', res.data)
        setColors([...filteredColors, res.data])
      })
      .catch(err => {
        setError('colors not saved')
      })
}


export const deleteColorService = (id, setColors, setError) =>
axiosWithAuth().put(`http://localhost:5000/api/colors/${id}`)
    .then(res => {
      setColors(res.data)
    })
    .catch(err => {
      setError('colors not removed')
    })