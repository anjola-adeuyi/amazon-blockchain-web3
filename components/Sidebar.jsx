import Image from 'next/image'
import { ConnectButton } from 'web3uikit'

// style container css-in-js
const styles = {
	container: `h-full w-full flex bg-[#fff]`
}

const isAuthenticated = true

const Sidebar = () => {
	return (
		<div className={styles.container}>
			<div className={styles.profile}>
				{isAuthenticated && (
					<>
						<div className={styles.profilePicContainer}>
							<Image
								// src="/static/images/profile.jpg"
								width={100}
								height={100}
								alt='profile'
								className={styles.profilePic}
							/>
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default Sidebar
