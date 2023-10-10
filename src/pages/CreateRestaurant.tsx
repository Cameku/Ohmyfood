
import { useRef, useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { MenuType, RestaurantType } from '../type';

//Update json server
//https://www.youtube.com/watch?v=CUyU_ySLnIM&ab_channel=CodeWithYousaf
//https://www.youtube.com/watch?v=PE-mbRi7bJs&ab_channel=ProgrammingSimplifiedNow - Edit


const CreateRestaurant = () => {

  const [menuList, setMenuList] = useState<MenuType[]>([]);
  const [menuName, setMenuName] = useState('');
  const [selectedMenuName, setSelectedMenuName] = useState('');
  const [menuDescription, setMenuDescription] = useState('');
  const [menuPrice, setMenuPrice] = useState(0);
  const [menuType, setMenuType] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [saveBtnText, setSaveBtnText] = useState('Add Nenu')
  const selectedIndex = useRef(-1);



  const addToRestaurantAsync = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
  }

  const selectOption = (e: any) => {
    const menuOption: string = e.target.value;
    setMenuType(menuOption)

  }

  const addToMenu = () => {
    if (!isEditing) {
      setMenuList(menuList => [...menuList, { name: menuName, description: menuDescription, price: menuPrice, type: menuType }]);
      setMenuName('');
      setMenuDescription('');
      setMenuPrice(0);
      setMenuType(menuType)
    } else {
      const selectedMenu = menuList.find((_, i) => i == selectedIndex.current)!
      selectedMenu.description = menuDescription;
      selectedMenu.name = menuName;
      selectedMenu.price = menuPrice;
      selectedMenu.type = menuType;
    }
    setIsEditing(false);
    setSaveBtnText('Add Menu');
  }

  // deleting Menu
  const deleteMenu = (index: number) => {
    const newMenu1 = menuList.filter((_, i) => i !== index);
    setMenuList(newMenu1);

  }

  // Editing Menu
  const handleEdit = (event: any) => {
    setIsEditing(true);
    setSaveBtnText('Update Menu');

    const index = Number(event.target.value);
    selectedIndex.current = index;
    const selectedMenu = menuList.find((element, i) => i === index)!;
    setMenuName(selectedMenu.name);
    setMenuDescription(selectedMenu.description);
    setMenuPrice(selectedMenu.price);
    setMenuType(selectedMenu.type);


  }

  const handleInputChange = (e: any) => {
    const newName = menuList.map((newMenuName) => (
      newMenuName.name === menuName ? { ...newMenuName, [e.target.name]: e.target.value } : newMenuName
    ))
    setMenuList(newName);
  }



  return (
    <div className='mainForm'>
      <h2>Please add a new restaurant</h2>
      <br />
      <Container>
        <Row>
          <Col>
            <Form className='form'>
              <Form.Group className="formLabel" >
                <Form.Label >Menu Name: </Form.Label><br />
                <Form.Control
                  type="text"
                  value={menuName}
                  placeholder="Enter Menu"
                  className='inputBox'
                  onChange={(e) => setMenuName(e.target.value)} />
              </Form.Group>
              <Form.Group className="formLabel" controlId="formDesc">
                <Form.Label>Description: </Form.Label><br />
                <Form.Control
                  type="text"
                  placeholder="Enter Description"
                  className='inputBox'
                  value={menuDescription}
                  onChange={(e) => setMenuDescription(e.target.value)} />
              </Form.Group>
              <Form.Group className="formLabel" controlId="formPrice">
                <Form.Label>Menu Price: </Form.Label><br />
                <Form.Control
                  type="text"
                  placeholder="Enter Price"
                  className='inputBox'
                  value={menuPrice}
                  onChange={(e) => setMenuPrice(Number(e.target.value))} />
              </Form.Group><br />
              <Form.Select aria-label="Default" className='inputBox' onChange={selectOption}>
                <option >Please select type of menu</option>
                <option value="Entrees" >Entrees</option>
                <option value="Main-Dish">Main-Dish</option>
                <option value="Desserts">Desserts</option>
              </Form.Select>
              <br /><br />

            </Form>
            <Button onClick={addToMenu}>{saveBtnText} </Button>
            <br /><br />
          </Col>

          <Col>
            <h3>Your new menu list here</h3><br />
            {
              menuList?.length > 0 ? (
                menuList.map((menuItem, index) => (
                  (
                    <div key={index}>
                      <Row className='mb-2'>
                        <Col>Menu Name: <b>{menuItem.name} </b></Col>
                        <Col>Menu Desc: <b>{menuItem.description} </b></Col>
                        <Col>Menu Price: <b>£{menuItem.price} </b> </Col>
                        <Col> Menu Type: <b> {menuItem.type} </b></Col>{ }
                        <Button onClick={() => deleteMenu(index)}>Delete Menu </Button> { }
                        <Button value={index} onClick={(e) => handleEdit(e)}>Edit Menu </Button>
                      </Row>
                      <br />
                    </div>
                  )
                ))

              ) : (
                <div><h4>Please add Menu to the list</h4></div>
              )
            }
          </Col>
          <br /><br />
          <Button variant="primary" type="submit" onClick={addToRestaurantAsync}>Add Restaurant </Button>
          <br />
        </Row>
      </Container>

      <br />
    </div>
  )
}

export default CreateRestaurant
