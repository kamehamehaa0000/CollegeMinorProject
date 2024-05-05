import React from 'react'
import Marquee from 'react-fast-marquee'

const Marque = () => {
  return (
    <div>
      <Marquee
        className="h-[100px] bg-[#E45834] rounded-md text-white"
        gradient="true"
        speed={100}
        gradientWidth={100}
        gradientColor="#E35834"
      >
        <h1 className="text-4xl font-bold">
          🍾🍰🍴🥗🍕🍔🍟🥞🍵☕🥛🍾🍰🍴🥗🍕🍔🍟🥞🍵☕🥛 🍾🍰🍴🥗🍕🍔🍟🥞🍵☕🥛
          🍾🍰🍴🥗🍕🍔🍟🥞🍵☕🥛 🍾🍰🍴🥗🍕🍔🍟🥞🍵☕🥛 🍾🍰🍴🥗🍕🍔🍟🥞🍵☕🥛
          🍾🍰🍴🥗🍕🍔🍟🥞🍵☕🥛 🍾🍰🍴🥗🍕🍔🍟🥞🍵☕🥛 🍾🍰🍴🥗🍕🍔🍟🥞🍵☕🥛
          🍾🍰🍴🥗🍕🍔🍟🥞🍵☕🥛
        </h1>
      </Marquee>
    </div>
  )
}

export default Marque
