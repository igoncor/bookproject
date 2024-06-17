const User = require ('../models/user.model')

const bcrypt = require('bcrypt')

async function getAllUsers(req, res) {
	try {
		const users = await User.findAll()
		if (users) {
			return res.status(200).json(users)
		} else {			
			return res.status(404).send('No users found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function getOneUser(req, res) {
	try {
		const user = await User.findByPk(req.params.id)
		if (user) {
			return res.status(200).json(user)
		} else {
			return res.status(404).send('User not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

// async function createUser(req, res) {
// 	try {
// 		const user = await User.create(req.body)
// 		return res.status(200).json({ message: 'User created', user: user })
// 	} catch (error) {
// 		res.status(500).send(error.message)
// 	}
// }
//Función de creación de usuario que emplearía un administrador
const createUser = async (req, res) => {
	try {
	  //Debemos encriptar la contraseña, igual que en el signup
	  const salt = bcrypt.genSaltSync(parseInt(process.env.BCRYPT_SALTS))
	  req.body.password = bcrypt.hashSync(req.body.password, salt)
  
	  const user = await User.create(req.body)
  
	  res.status(201).json({
		message: 'User created',
		result: user
	  })
	} catch (error) {
	  console.log(error)
	  res.status(500).json({
		message: 'Error creating user',
		result: error
	  })
	}
  }
async function updateOneUser(req, res) {
	try {
		const [userExist, user] = await User.update(req.body, {
			returning: true,
			where: {
				id: req.params.id,
			},
		})
        if (userExist !== 0) {
			return res.status(200).json({ message: 'User has been updated', user: user })
		} else {
			return res.status(404).send('User has not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function deleteOneUser(req, res) {
	try {
		const user = await User.destroy({
			where: {
				id: req.params.id,
			},
		})
		if (user) {
			return res.status(200).json('User  has been deleted')
		} else {
			return res.status(404).send('User has not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

module.exports = {
	getAllUsers,
	getOneUser,
	createUser,
	updateOneUser,
	deleteOneUser,
	
}